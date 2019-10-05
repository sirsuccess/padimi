const nigState = [
    {
      name: "Abia",
      capital: "Umuahia",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Adamawa",
      capital: "Yola",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Akwa Ibom",
      capital: "Uyo",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Anambra",
      capital: "Awka",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Bauchi",
      capital: "Bauchi",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Benue",
      capital: "Makurdi",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Borno",
      capital: "Maiduguri",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Bayelsa",
      capital: "Yenagoa",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Cross River",
      capital: "Calabar",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Delta",
      capital: "Asaba",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Ebonyi",
      capital: "Abakaliki",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Edo",
      capital: "Benin",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Ekiti",
      capital: "Ado-Ekiti",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Enugu",
      capital: "Enugu",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Federal Capital Territory",
      capital: "Abuja",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Gombe",
      capital: "Gombe",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Jigawa",
      capital: "Dutse",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Imo",
      capital: "Owerri",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Kaduna",
      capital: "Kaduna",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Kebbi",
      capital: "Birnin Kebbi",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Kano",
      capital: "Kano",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Kogi",
      capital: "Lokoja",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Lagos",
      capital: "Ikeja",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Katsina",
      capital: "Katsina",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Kwara",
      capital: "Ilorin",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Nasarawa",
      capital: "Lafia",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Niger",
      capital: "Minna",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Ogun",
      capital: "Abeokuta",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Ondo",
      capital: "Akure",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Rivers",
      capital: "Port Harcourt",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Oyo",
      capital: "Ibadan",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Osun",
      capital: "Osogbo",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Sokoto",
      capital: "Sokoto",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Plateau",
      capital: "Jos",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Taraba",
      capital: "Jalingo",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Yobe",
      capital: "Damaturu",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    },
    {
      name: "Zamfara",
      capital: "Gusau",
      constituency: ["Abia Central", "Abia North", "Abia South"]
    }
  ];
  
  const inputStateDOM = document.querySelector("#inputState");
  
  document.addEventListener("DOMContentLoaded", async () => {
    // const cities = await fetch(
    //   "http://locationsng-api.herokuapp.com/api/v1/states"
    // );
    // const k = await cities.json();
    // console.log(k);
    let k;
    nigState.forEach(item => {
      k += `<option value=${item.name}>${item.name}</option>`;
    });
    inputStateDOM.innerHTML += k;
  });
  