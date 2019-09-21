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

document.addEventListener("DOMContentLoaded", async () => {
  // username
  const userName = JSON.parse(localStorage.getItem("info"));
  document.querySelectorAll(".username").forEach(item => {
    item.innerText = userName.first_name;
  });
  // user image
  const imageUrl = document.querySelectorAll(".profile-image");
  imageUrl.forEach(item => {
    item.src = userName.image || "./img/missingIMAGE.PNG";
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

  if (padPremium && padConnect && padStart && padLite) {
    document.querySelector(".texter").style.display = "none";
    // spinner.setAttribute("hidden", "");
  }
  //   ADD ITEMS HMO / DISPLAY HMO FOR THE UI ////////////////////////////////////

  let padLite_Insurance = "";
  let padLite_hmo = "";
  padLite.forEach(item => {
    if (item.type === "hmo") {
      padLite_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padLite_Insurance += `<p class="colours-cent">${item.name}</p>`;
    }
  });
  padLite_Insurance_provisionDOM.innerHTML = padLite_Insurance;
  padLite_hmo_provisionDOM.innerHTML = padLite_hmo;

  // PADI START
  let padStart_Insurance = "";
  let padStart_hmo = "";
  padStart.forEach(item => {
    if (item.type === "hmo") {
      padStart_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padStart_Insurance += `<p class="colours-cent">${item.name}</p>`;
    }
  });
  document.querySelector(
    ".padStart-insurance-provision"
  ).innerHTML = padStart_Insurance;
  document.querySelector(".padStart-hmo-provision").innerHTML = padStart_hmo;

  //  PADI CONNECT
  let padConnect_Insurance = "";
  let padConnect_hmo = "";
  padConnect.forEach(item => {
    if (item.type === "hmo") {
      padConnect_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padConnect_Insurance += `<p class="colours-cent">${item.name}</p>`;
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
  padPremium.forEach(item => {
    if (item.type === "hmo") {
      padPremium_hmo += `<p class="colours-cent">${item.name}</p>`;
    }
    if (item.type === "insurance") {
      padPremium_Insurance += `<p class="colours-cent">${item.name}</p>`;
    }
  });
  document.querySelector(
    ".padPremium-insurance-provision"
  ).innerHTML = padPremium_Insurance;
  document.querySelector(
    ".padPremium-hmo-provision"
  ).innerHTML = padPremium_hmo;
});

/////////////////////////VIEW MORE PADI INFORMATION BY CLICKING VIEW MORE
const seeMore = document.querySelectorAll(".txt1");
const view_more_BTN = document.querySelector(".view-more-body");

const showViewMore = (type, plan) => {
  if (plan === "padi_lite") {
    let kLite = "";
    padLiteGlobal.forEach(item => {
      if (type === "hmo") {
        kLite += `<p>${item.name} </p>`;
      }
      if (type === "insurance") {
        kLite += `<p>${item.name} </p>`;
      }
    });
    document.querySelector(".view-more-body").innerHTML = kLite;
  }
  if (plan === "padi_start") {
    let kStart = "";
    padStartGlobal.forEach(item => {
      if (type === "hmo") {
        kStart += `<p>${item.name} </p>`;
      }
      if (type === "insurance") {
        kStart += `<p>${item.name} </p>`;
      }
    });
    document.querySelector(".view-more-body").innerHTML = kStart;
  }
  if (plan === "padi_connect") {
    let kConnect = "";
    padConnectGlobal.forEach(item => {
      if (type === "hmo") {
        kConnect += `<p>${item.name} </p>`;
      }
      if (type === "insurance") {
        kConnect += `<p>${item.name} </p>`;
      }
    });
    document.querySelector(".view-more-body").innerHTML = kConnect;
  }
  if (plan === "padi_premium") {
    let kPremium = "";
    padPremiumGlobal.forEach(item => {
      if (type === "hmo") {
        kPremium += `<p>${item.name} </p>`;
      }
      if (type === "insurance") {
        kPremium += `<p>${item.name} </p>`;
      }
    });
    document.querySelector(".view-more-body").innerHTML = kPremium;
  }
};

seeMore.forEach(item => {
  item.addEventListener("click", () => {
    showViewMore(item.dataset.type, item.dataset.plan);
  });
});

//////////////////////////// PAYMENT WITH PAYPAL //////////////////////////////////

const payment = document.querySelectorAll(".pay-padi");
payment.forEach(item => {
  item.addEventListener("click", () => {
    payWithPaystack(item.dataset.type, item.dataset.plan);
  });
});

function payWithPaystack(type, plan) {
  let userEmail = JSON.parse(localStorage.getItem("info"));
  let price;
  if (plan === "padi_lite") {
    price = 3000;
  }
  if (plan === "padi_start") {
    price = 4500;
  }
  if (plan === "padi_connect") {
    price = 6000;
  }
  if (plan === "padi_premium") {
    price = 8000;
  }

  var handler = PaystackPop.setup({
    key: "pk_test_fe5330c53cb0ba92c74e641d0570484000e5c46f",
    email: userEmail,
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
      console.log(response, type);
      // alert("success. transaction ref is " + response.reference);
    },
    onClose: function() {
      console.log("window closed");
      // alert("window closed");
    }
  });
  handler.openIframe();
}

////////////////////////// LOGOUT ////////////////////////////////
const logoutDOM = document.querySelector(".logout");
logoutDOM.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});

// //////////////// UPLOAD PROFILE IMAGE /////////////////

const settingInfo = [
  `<div class="card card-fluid">
  <h6 class="card-header"> Public Profile </h6>
  <div class="card-body">
    <div class="media mb-3">
      <div class="user-avatar user-avatar-xl fileinput-button">
        <div class="fileinput-button-label change-photo-img"> Change photo </div>
        <img class="profile-image" > 
        </div>
        <div class="media-body pl-3 ml-5">
          <h3 class="card-title"> Public avatar </h3>
          <h6 class="card-subtitle text-muted"> Click the current avatar to change your photo. </h6>
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
<div class="card-body">
<!-- form -->
<form class="change_password">
<!-- form row -->
<div class="form-row">
</div>
<!-- /form row -->
<!-- .form-group -->
<div class="form-group">
<label for="input03">Email</label>
<input type="email" class="form-control" id="input03" value="bent10@looper.com" required=""> </div>
<!-- /.form-group -->
<!-- .form-group -->
<div class="form-group">
<label for="input04">New Password</label>
<input type="password" class="form-control" id="input04" value="secret" required=""> </div>
<!-- /.form-group -->
<hr>
<!-- .form-actions -->
<div class="form-actions">
<!-- enable submit btn when user type their current password -->
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

// const submitProfileDetails = async type => {
//   // e.preventDefault();
//   if (type === "image") {
//     const image = document.querySelector("#fileupload-avatar");
//     // const image = document.querySelector('input[type="file"]');
//     const userToken = JSON.parse(localStorage.getItem("token"));
//     const result = await fetch("https://padimi.herokuapp.com/api/v1/profile", {
//       method: "post",
//       headers: {
//         authorization: userToken,
//         "Content-Type": "multipart/form-data"
//       },
//       body: JSON.stringify({
//         img_url: image.files[0]
//       })
//     });
//     const resIMG = await result.json();
//     console.log(resIMG, "joel resIMG");
//   } else {
//     console.log(type);
//   }

// };
// const profileDOM = document.querySelector("#profileSetting");
// const accountDOM = document.querySelector("#account");
// const settingsDetailsDOM = document.querySelector(".settings-details");

// [profileDOM, accountDOM].forEach((item, i) => {
//   item.addEventListener("click", () => {
//     settingsDetailsDOM.innerHTML = "";
//     profileDOM.classList.toggle("active");
//     accountDOM.classList.toggle("active");
//     settingsDetailsDOM.innerHTML = settingInfo[i];

//     if (document.querySelector(".change_password")) {
//       document
//         .querySelector(".change_password")
//         .addEventListener("submit", e => {
//           e.preventDefault();
//           submitProfileDetails("password");
//         });
//     }

//   });
// });

// console.log(passwordChanger);
