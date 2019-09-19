const outputDOM = document.querySelector("#text");
const signUPFormDOM = document.querySelector("#register-form");
const spinner = document.getElementById("spinner");

signUPFormDOM.addEventListener("submit", async e => {
  e.preventDefault();
  const first_name = document.querySelector('input[name="first_name"]').value;
  const last_name = document.querySelector('input[name="last_name"]').value;
  const gender = document.querySelector('select[name="gender"]').value;
  const state = document.querySelector('select[name="state"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const c_password = document.querySelector('input[name="confirmation"]').value;
  const address = document.querySelector('input[name="address"]').value;
  const email = document.querySelector('input[name="email"]').value;

  if (!first_name.match(/^[A-Z]+$/i)) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "First name should be alphabets only"
    });
  } else if (!last_name.match(/^[A-Z]+$/i)) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Last name should be alphabets only"
    });
  } else if (gender === "Choose..." || state === "Choose state") {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "state or gender is not selected"
    });
  } else if (password !== c_password) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "password and confirm password must be the same"
    });
  } else {
    spinner.removeAttribute("hidden");
    document.getElementById("register-form").style.visibility = "hidden";
    const result = await fetch(
      "https://padimi.herokuapp.com/api/v1/auth/signup",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name,
          last_name,
          gender,
          email,
          password,
          state,
          phone,
          address
        })
      }
    );
    const res = await result.json();
    if (res.status === 201) {
      Swal.fire({
        position: "center",
        type: "success",
        title: "Registration successful",
        showConfirmButton: false,
        timer: 2000
      });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("register-form").style.visibility = "visible";
      spinner.setAttribute("hidden", "");

      const failedText =
        res.error.first_name ||
        res.error.last_name ||
        res.error.email ||
        res.error.address ||
        res.error.phone ||
        res.error.state ||
        res.error.password ||
        res.error;
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: failedText
      });
    }
  }
});
