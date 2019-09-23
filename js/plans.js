let padLite_hmo_provisionDOM = document.querySelector(".padLite-hmo-provision");
let padLite_Insurance_provisionDOM = document.querySelector(
  ".padLite-insurance-provision"
);

let padStart_hmo_provisionDOM = document.querySelector(
  ".padStart-hmo-provision"
);
let padStart_insurance_provisionDOM = document.querySelector(
  ".padStart-insurance-provision"
);
let padLiteGlobal;
let padStartGlobal;
let padConnectGlobal;
let padPremiumGlobal;
let LocationGlobal;

const myFUn = (firstD, SecondD) => {
  let d = firstD;
  let dd = SecondD;
  let d2 = Number(dd);

  let d1 = d.split("T")[0];
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays <= 31) {
    return {
      status: "active",
      color: "badge-success"
    };
  } else {
    return {
      status: "Inactive",
      color: "badge-danger"
    };
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  //////////////////////////// PRODUCTS ///////////////////////////////////////
  const subscription = document.querySelector(".products-sub");
  const tokenU = JSON.parse(localStorage.getItem("token"));
  const subscriptData = await fetch("https://padimi.herokuapp.com/api/v1/buy", {
    method: "GET",
    headers: {
      token: tokenU,
      "Content-Type": "application/json"
    }
  });

  const resSubscriptData = await subscriptData.json();
  if (resSubscriptData.data.buy.length === 0) {
    subscription.innerHTML = `
      <div class="empty-container"> 
        <h1>You don't have any Padimi plan</h1>
        <img src="./img/logo.JPG" class="empty-img">
      </div>
    `;
  } else {
    let subItems = "";
    resSubscriptData.data.buy.forEach(item => {
      let k = myFUn(item.datepaid, item.ending_date);
      subItems += `
      <div class="mb-0" >
      <div   style="background:#fff;" class="row align-items-start job-item pb-5 mb-3 pt-5" id="border-bottom">
        <div class="col-md-2">
          <a href="#"><img src="./img/logo.JPG" alt="Image" class="img-fluid"></a>
        </div>
        <div class="col-md-2">
          <span class="badge ${k.color} px-2 py-1 mb-3" style="font-size: 15px">${k.status}</span>
          <h2><a href="job-single.html">${item.plan}</a> </h2>
          <p class="meta">${item.type}: <strong>Novo</strong></p>
        </div>
        <div class="col-md-5 text-left">
          <br>Location</br>
          <p class="meta"><strong>${item.location}</strong></p>
        </div>
        <div class="col-md-3 text-md-right">
          Amount<br/>
          <strong class="text-black">&#8358;${item.amount}</strong>
        </div>
      </div>
      </div>
      `;
    });
    subscription.innerHTML = subItems;
  }

  // username
  const userName = JSON.parse(localStorage.getItem("info"));
  document.querySelectorAll(".username").forEach(item => {
    item.innerText = userName.first_name;
  });
  // user image
  const imageUrl = document.querySelectorAll(".profile-image");
  imageUrl.forEach(item => {
    item.src = userName.img || userName.image || "./img/missingIMAGE.PNG";
  });
  const resultLite = await fetch(
    "https://padimi.herokuapp.com/api/v1/padimi/padi_lite"
  );
  const resLite = await resultLite.json();

  const padLite = resLite.data;
  padLiteGlobal = padLite;

  /// GET LOCATIONS
  const locations = await fetch(
    "https://padimi.herokuapp.com/api/v1/padimi/hospitals"
  );
  const locationResult = await locations.json();
  LocationGlobal = locationResult.data;
  let hospitalsInfo = "";
  locationResult.data.forEach(item => {
    hospitalsInfo += `
    <button class="accordion">${item.name}</button>
    <div class="panel">
      <span>Address </span> <p>${item.address}</p>
      <span>state </span> <p>${item.state}</p>
    </div>
    `;
  });
  document.querySelector(".view-hospital").innerHTML = hospitalsInfo;
  var acc = document.querySelectorAll(".accordion");

  acc.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      let panel = item.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
  // END LOCATIONS
  //   padi start

  const resultStart = await fetch(
    "https://padimi.herokuapp.com/api/v1/padimi/padi_start"
  );
  const resStart = await resultStart.json();

  const padStart = resStart.data;
  padStartGlobal = padStart;

  //   padi connect

  const resultConnect = await fetch(
    "https://padimi.herokuapp.com/api/v1/padimi/padi_connect"
  );
  const resConnect = await resultConnect.json();

  const padConnect = resConnect.data;
  padConnectGlobal = padConnect;

  //   padi premium

  const resultPremium = await fetch(
    "https://padimi.herokuapp.com/api/v1/padimi/padi_premium"
  );
  const resPremium = await resultPremium.json();

  const padPremium = resPremium.data;
  padPremiumGlobal = padPremium;
  document.getElementById("spinner").removeAttribute("hidden");

  if (padPremium && padConnect && padStart && padLite) {
    document.querySelector(".texter").style.display = "none";
    document.getElementById("spinner").setAttribute("hidden", "");
  }
  //   ADD ITEMS HMO / DISPLAY HMO FOR THE UI ////////////////////////////////////

  let padLite_Insurance = "";
  let padLite_hmo = "";
  padLite.forEach((item, i) => {
    if (item.type === "hmo") {
      padLite_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padLite_Insurance += `
      <input type="radio" id="L${i}" class="insuranceLite" name="insurance" value="${item.name}">
      <label for="L${i}" class="L${i}" style="font-size: 13px">${item.name}</label>`;
    }
  });
  padLite_Insurance_provisionDOM.innerHTML = padLite_Insurance;
  padLite_hmo_provisionDOM.innerHTML = padLite_hmo;

  // PADI START
  let padStart_Insurance = "";
  let padStart_hmo = "";
  padStart.forEach((item, i) => {
    if (item.type === "hmo") {
      padStart_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padStart_Insurance += `
      <input type="checkbox" id="S${i}" class="insuranceStart" name="insurance" value="${item.name}">
      <label for="S${i}" style="font-size: 13px">${item.name}</label>`;
    }
  });
  document.querySelector(
    ".padStart-insurance-provision"
  ).innerHTML = padStart_Insurance;
  document.querySelector(".padStart-hmo-provision").innerHTML = padStart_hmo;

  //  PADI CONNECT
  let padConnect_Insurance = "";
  let padConnect_hmo = "";
  padConnect.forEach((item, i) => {
    if (item.type === "hmo") {
      padConnect_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padConnect_Insurance += `
      <input type="checkbox" id="C${i}" class="insuranceConnect" name="insurance" value="${item.name}">
      <label for="C${i}" style="font-size: 13px">${item.name}</label>`;
    }
  });
  document.querySelector(
    ".padConnect-insurance-provision"
  ).innerHTML = padConnect_Insurance;
  document.querySelector(
    ".padConnect-hmo-provision"
  ).innerHTML = padConnect_hmo;

  // PADI PREMIUM

  let padPremium_Insurance = "";
  let padPremium_hmo = "";
  padPremium.forEach((item, i) => {
    if (item.type === "hmo") {
      padPremium_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padPremium_Insurance += `
      <input type="checkbox" id="P${i}" class="insurancePremium" name="insurance" value="${item.name}">
      <label for="P${i}" style="font-size: 13px">${item.name}</label>`;
    }
  });
  document.querySelector(
    ".padPremium-insurance-provision"
  ).innerHTML = padPremium_Insurance;

  const payment = document.querySelectorAll(".pay-padi");
  payment.forEach(item => {
    item.addEventListener("click", () => {
      decideValue(item.dataset.type, item.dataset.plan);
    });
  });

  document.querySelector(
    ".padPremium-hmo-provision"
  ).innerHTML = padPremium_hmo;
});

/////////////////////////VIEW MORE PADI INFORMATION BY CLICKING VIEW MORE
const seeMore = document.querySelectorAll(".txt1");
const view_more_BTN = document.querySelector(".view-more-body");

const showViewMore = (type, plan) => {
  if (plan === "padi_lite") {
    if (type === "hmo") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLite = "";
      padLiteGlobal.forEach(item => {
        if (item.type === "hmo") {
          kLite += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLite;
    }
    if (type === "insurance") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLiteIns = "";
      padLiteGlobal.forEach(item => {
        if (item.type === "insurance") {
          kLiteIns += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLiteIns;
    }
  }
  if (plan === "padi_start") {
    if (type === "hmo") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLite = "";
      padStartGlobal.forEach(item => {
        if (item.type === "hmo") {
          kLite += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLite;
    }
    if (type === "insurance") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLiteIns = "";
      padStartGlobal.forEach(item => {
        if (item.type === "insurance") {
          kLiteIns += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLiteIns;
    }
  }
  if (plan === "padi_connect") {
    if (type === "hmo") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLite = "";
      padConnectGlobal.forEach(item => {
        if (item.type === "hmo") {
          kLite += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLite;
    }
    if (type === "insurance") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLiteIns = "";
      padConnectGlobal.forEach(item => {
        if (item.type === "insurance") {
          kLiteIns += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLiteIns;
    }
  }
  if (plan === "padi_premium") {
    if (type === "hmo") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLite = "";
      padPremiumGlobal.forEach(item => {
        if (item.type === "hmo") {
          kLite += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLite;
    }
    if (type === "insurance") {
      document.querySelector(".view-more-body").innerHTML = "";
      let kLiteIns = "";
      padPremiumGlobal.forEach(item => {
        if (item.type === "insurance") {
          kLiteIns += `<p>${item.name} </p>`;
        }
      });
      document.querySelector(".view-more-body").innerHTML = kLiteIns;
    }
  }
};

seeMore.forEach(item => {
  item.addEventListener("click", () => {
    showViewMore(item.dataset.type, item.dataset.plan);
  });
});

////////////////////////// LOGOUT ////////////////////////////////
const logoutDOM = document.querySelector(".logout");
logoutDOM.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});

//////////////////////////// PAYMENT WITH PAYPAL //////////////////////////////////

const decideValue = (type, plan) => {
  if (plan === "padi_lite") {
    if (type === "hmo") {
      payWithPaystack(2500);
    } else {
      let counter = 0;
      document.querySelectorAll(".insuranceLite").forEach(item => {
        if (item.checked) {
          counter++;
        }
      });
      if (counter === 0) {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please select an item"
        });
      } else {
        payWithPaystack(2500);
      }
    }
  }
  if (plan === "padi_start") {
    if (type === "hmo") {
      payWithPaystack(3500);
    } else {
      let counter = 0;
      document.querySelectorAll(".insuranceStart").forEach(item => {
        if (item.checked) {
          counter++;
        }
      });
      if (counter === 2) {
        payWithPaystack(3500);
      } else {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please select two items"
        });
      }
    }
  }
  if (plan === "padi_connect") {
    if (type === "hmo") {
      payWithPaystack(5000);
    } else {
      let counter = 0;
      document.querySelectorAll(".insuranceConnect").forEach(item => {
        if (item.checked) {
          counter++;
        }
      });
      if (counter === 3) {
        payWithPaystack(5000);
      } else {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please select three items"
        });
      }
    }
  }
  if (plan === "padi_premium") {
    if (type === "hmo") {
      payWithPaystack(6500);
    } else {
      let counter = 0;
      document.querySelectorAll(".insurancePremium").forEach(item => {
        if (item.checked) {
          counter++;
        }
      });
      if (counter === 4) {
        payWithPaystack(6500);
      } else {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Please select four items"
        });
      }
    }
  }
};

function payWithPaystack(price) {
  let userEmail = JSON.parse(localStorage.getItem("info"));
  var handler = PaystackPop.setup({
    key: "pk_live_756a99e117982ffa81126b57b9dd91089869eb59",
    email: userEmail.email,
    amount: price * 100,
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: "+2348012345678"
        }
      ]
    },
    callback: function(response) {
      console.log(response);
    },
    onClose: function() {
      console.log("window closed");
    }
  });
  handler.openIframe();
}

//////////////////////////// END PAYMENT WITH PAYPAL //////////////////////////////////

// //////////////// UPLOAD PROFILE IMAGE /////////////////

const settingInfo = [
  `<div class="card card-fluid">
  <h6 class="card-header"> Public Profile </h6>
  <div hidden id="spinner"></div>
  <div class="card-body profile_img_body">
    <div class="media mb-3">
      <div class="user-avatar user-avatar-xl fileinput-button">
        <div class="fileinput-button-label change-photo-img"> Change photo </div>
        <img class="profile-image" > 
        </div>
        <div class="media-body pl-3 ml-5">
          <h3 class="card-title"> Public avatar </h3>
          <!-- <h6 class="card-subtitle text-muted"> Click the current avatar to change your photo. </h6> -->
          <p class="card-text">
            <small>JPG, GIF or PNG 400x400, &lt; 2 MB.</small>
          </p>
          <div id="progress-avatar" class="progress progress-xs fade">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
      <form class="profile_image-changer">
        <div class="form-row">
          <label for="input01" class="col-md-3">Profile image</label> 
          <div class="col-md-9 mb-3">
            <div class="custom-file">
                <input type="file" enctype="multipart/form-data" id="fileupload-avatar" name="fileupload-avatar" >
            </div>
          </div>
        </div>
        
        <hr>
        <div class="form-actions">
          <button type="submit" class="btn btn-primary ml-auto">Update Profile</button>
        </div>
      </form>
    </div>
</div>`,
  `<!-- .card -->
  <div class="card card-fluid">
<h6 class="card-header"> Account </h6>
<!-- .card-body -->
<div class="card-body psw_body">
<div hidden id="spinner"></div>
<!-- form -->
<form class="change_password">
<!-- form row -->
<div class="form-row">
</div>
<!-- /form row -->

<!-- .form-group -->
<div class="form-group">
<label for="input04">Old Password</label>
<input type="password" class="form-control" id="input04" value="secret" required=""> </div>
<!-- /.form-group -->
<hr>
<!-- .form-actions -->
<div class="form-actions">
<!-- enable submit btn when user type their current password -->
<label for="input04">New Password</label>
<input type="password" class="form-control ml-auto mr-3" id="input06" placeholder="Enter Current Password" required="">
<button type="submit" class="btn btn-primary mt-2" >Update Account</button>
</div>
<!-- /.form-actions -->
</form>
<!-- /form -->
</div>
<!-- /.card-body -->
   </div>
   <!-- /.card -->`
];

const submitProfileDetails = async type => {
  const spinner = document.getElementById("spinner");
  const psw_body = document.querySelector(".psw_body");
  const profile_img_body = document.querySelector(".profile_img_body");
  if (type === "image") {
    const image = document.querySelector("#fileupload-avatar");
    const data = new FormData();
    data.append("img_url", image.files[0]);
    const userToken = JSON.parse(localStorage.getItem("token"));
    spinner.removeAttribute("hidden");
    profile_img_body.style.visibility = "hidden";
    const result = await fetch("https://padimi.herokuapp.com/api/v1/profile", {
      method: "post",
      headers: {
        token: userToken
      },
      body: data
    });
    const resIMG = await result.json();
    if (resIMG.status === 201) {
      profile_img_body.style.visibility = "visible";
      spinner.setAttribute("hidden", "");
      Swal.fire({
        position: "center",
        type: "success",
        title: "success",
        showConfirmButton: false,
        timer: 2000
      });
      localStorage.setItem("info", JSON.stringify(resIMG.data.newUserInfo[0]));
      window.location.href = "dashboard.html";
    } else {
      profile_img_body.style.visibility = "visible";
      spinner.setAttribute("hidden", "");
      const failedText = resIMG.error.img_url || resIMG.error;
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: failedText
      });
    }
  } else {
    const resetPaw = document.querySelector("#input04").value;
    const resetPaw_consfirm = document.querySelector("#input06").value;
    spinner.removeAttribute("hidden");
    psw_body.style.visibility = "hidden";
    const userToken = JSON.parse(localStorage.getItem("token"));
    const result = await fetch("https://padimi.herokuapp.com/api/v1/password", {
      method: "PATCH",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        token: userToken
      },
      body: JSON.stringify({
        password: resetPaw,
        new_password: resetPaw_consfirm
      })
    });
    const resIMG = await result.json();
    if (resIMG.status === 200) {
      spinner.setAttribute("hidden", "");
      psw_body.style.visibility = "visible";
      Swal.fire({
        position: "center",
        type: "success",
        title: "Your password has been updated",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      const failedText =
        resIMG.error.password || resIMG.error.new_password || resIMG.error;
      spinner.setAttribute("hidden", "");
      psw_body.style.visibility = "visible";
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: failedText
      });
    }
  }
};
const profileDOM = document.querySelector("#profileSetting");
const accountDOM = document.querySelector("#account");
const settingsDetailsDOM = document.querySelector(".settings-details");

[profileDOM, accountDOM].forEach((item, i) => {
  item.addEventListener("click", () => {
    settingsDetailsDOM.innerHTML = "";
    profileDOM.classList.toggle("active");
    accountDOM.classList.toggle("active");
    settingsDetailsDOM.innerHTML = settingInfo[i];

    if (document.querySelector(".change_password")) {
      document
        .querySelector(".change_password")
        .addEventListener("submit", e => {
          e.preventDefault();
          submitProfileDetails("password");
        });
    }
    if (document.querySelector(".profile_image-changer")) {
      const userName = JSON.parse(localStorage.getItem("info"));
      const imageUrl = document.querySelectorAll(".profile-image");
      imageUrl.forEach(item => {
        item.src = userName.img || userName.image || "./img/missingIMAGE.PNG";
      });
      document
        .querySelector(".profile_image-changer")
        .addEventListener("submit", e => {
          e.preventDefault();
          submitProfileDetails("image");
        });
    }
  });
});

//  before the profile and settings is toggled
document
  .querySelector(".profile_image-changer")
  .addEventListener("submit", e => {
    e.preventDefault();
    submitProfileDetails("image");
  });
