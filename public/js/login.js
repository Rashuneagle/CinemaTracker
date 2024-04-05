var login = document.querySelector("#login-form");
var signup = document.querySelector("#signup-form");

login.addEventListener("submit", event => {
  event.preventDefault();
  const userObj = {
    username:document.querySelector("#username-login").value,
    password:document.querySelector("#password-login").value,
  }
  console.log(userObj);
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if(res.ok) {
      console.log("You have logged in successfully!");
      location.href="/dashboard";
    } else {
      alert("Please try again!");
    }
  })
})

signup.addEventListener("submit", event => {
  event.preventDefault();
  const userObj = {
    username:document.querySelector("#username-signup").value,
    password:document.querySelector("#password-signup").value,
  }
  console.log(userObj);
  fetch("/api/users/", {
    method: "POST",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if(res.ok) {
      console.log("You have signed in successfully!");
      location.href="/dashboard";
    } else {
      alert("Please try again!");
    }
  })
})
