const loginFormDOM = document.querySelector("#login-form");
// const spinner = document.getElementById("spinner");
document.querySelector(".texter").style.display = "none";

loginFormDOM.addEventListener("submit", async e => {
  e.preventDefault();
  const password = document.querySelector('input[name="password"]').value;
  const email = document.querySelector('input[name="email"]').value;

  spinner.removeAttribute("hidden");
  document.querySelector(".texter").style.display = "block";
  document.getElementById("login-form").style.visibility = "block";
  const result = await fetch(
    "https://padimi.herokuapp.com/api/v1/auth/signin",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );
  const res = await result.json();
  if (res.status === 200) {
    Swal.fire({
      position: "center",
      type: "success",
      title: "success",
      showConfirmButton: false,
      timer: 2000
    });
    localStorage.setItem("token", JSON.stringify(res.data.token));
    localStorage.setItem("info", JSON.stringify(res.data));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-form").style.visibility = "visible";
    document.querySelector(".texter").style.display = "none";
    document.getElementById("spinner").setAttribute("hidden", "");

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
});
