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

document.addEventListener("DOMContentLoaded", async () => {
  const resultLite = await fetch(
    "https://padimi.herokuapp.com/api/v1/padimi/padi_lite"
  );
  const resLite = await resultLite.json();

  const padLite = resLite.data;
  padLiteGlobal = padLite;
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

  //   ADD ITEMS HMO

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
