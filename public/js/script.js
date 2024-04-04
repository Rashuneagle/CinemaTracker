var login = document.querySelector("#login");
var signup = document.querySelector("#signup");
var newMovie = document.querySelector("#newMovie");

function hideCreateNew() {
  createNew.hidden=true;
}

hideCreateNew();

newMovie.addEventListener("submit", event => {
  var title = document.querySelector("#title").value;
  var content = document.querySelector("#content").value;
  event.preventDefault();
  console.log('click');
  if (!title || !content) {
    alert('Please enter both the title and content!');
    return;
  }
  const blogObj = {
    title: title,
    content: content,
  }
  fetch('/api/blogs', {
    method:'POST',
    body:JSON.stringify(blogObj),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if(res.ok){
      createNew.setAttribute('hidden', 'false');
      location.reload();
    } else {
      alert('Error - Please Try Again');
    }
  })
})

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
