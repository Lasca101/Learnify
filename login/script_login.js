var userList = [
  { username: "user1", password: "senha1" },
  { username: "adm", password: "adm"},
  { username: "user2", password: "senha2" },
  { username: "user3", password: "senha3" }
];
var storedUserListString = localStorage.getItem("userList");
var storedUserList = JSON.parse(storedUserListString);
var userListString = JSON.stringify(userList);
var loginFormWrapper = document.getElementById("login-form-wrapper");
var registerOption = document.getElementById("register-option");
var registerFormWrapper1 = document.getElementById("register-form-wrapper1");
var registerFormWrapper2 = document.getElementById("register-form-wrapper2");
var loginLink = document.getElementById("login-link");
localStorage.setItem("userList", userListString);
console.log(storedUserList);

function showRegisterOption() {
  loginFormWrapper.style.display = "none";
  registerOption.style.display = "block";
}

function redirectToForm(formId) {
  registerOption.style.display = "none";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "none";

  if (formId === "register-form1") {
    registerFormWrapper1.style.display = "block";
    registerOption.style.display = "none";
  } else if (formId === "register-form2") {
    registerFormWrapper2.style.display = "block";
    registerOption.style.display = "none";
  }
}



loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  registerOption.style.display = "block";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block";
});

document.getElementById("login-link").addEventListener("click", function (event) {
  event.preventDefault();
  registerOption.style.display = "none";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block";
});

document.getElementById("login-link2").addEventListener("click", function (event) {
  event.preventDefault();
  registerOption.style.display = "none";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block";
});

function showLoginForm() {
  const loginWrapper = document.getElementById("login-wrapper");
  const registerWrapper = document.getElementById("register-wrapper");
  
  loginWrapper.classList.remove("fade-out-left");
  loginWrapper.classList.add("fade-in");

  registerWrapper.classList.remove("fade-in-right");
  registerWrapper.classList.add("fade-out");
}

function showRegisterForm() {
  const loginWrapper = document.getElementById("login-wrapper");
  const registerWrapper = document.getElementById("register-wrapper");
  
  loginWrapper.classList.remove("fade-in");
  loginWrapper.classList.add("fade-out-left");

  registerWrapper.classList.remove("fade-out");
  registerWrapper.classList.add("fade-in-right");
}


window.addEventListener("DOMContentLoaded", function () {
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");

  if (username && password) {
    
    document.getElementById("register-form1-username").value = username;
    document.getElementById("register-form2-username").value = username;
    document.getElementById("register-form1-password").value = password;
    document.getElementById("register-form2-password").value = password;
  }
});

var loginFormWrapper = document.getElementById("login-form-wrapper");
var registerOption = document.getElementById("register-option");
var registerFormWrapper1 = document.getElementById("register-form-wrapper1");
var registerFormWrapper2 = document.getElementById("register-form-wrapper2");
var loginLink = document.getElementById("login-link");

function showRegisterOption() {
  loginFormWrapper.style.display = "none";
  registerOption.style.display = "block";
  registerOption.style.display = "block"; 
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block"; 
}

function redirectToForm(formId) {
  registerOption.style.display = "none";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "none";

  if (formId === "register-form1") {
    registerFormWrapper1.style.display = "block";
    registerOption.style.display = "none";
  } else if (formId === "register-form2") {
    registerFormWrapper2.style.display = "block";
    registerOption.style.display = "none";
  }
}

document.getElementById("register-button").addEventListener("click", function(event) {
  event.preventDefault();
  var username = document.getElementById("register-form2-username").value;
  var password = document.getElementById("register-form2-password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block";
  window.location.href = "login.html";
});


ddocument.getElementById("register-form1").addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.setItem("username", document.getElementById("register-form1-username").value);
  localStorage.setItem("password", document.getElementById("register-form1-password").value);
  registerFormWrapper1.style.display = "none";
  loginFormWrapper.style.display = "block";
  window.location.href = "login.html";
});

document.getElementById("register-form2").addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block";
  window.location.href = "login.html";
  
});

document.getElementById("login-link").addEventListener("click", function (event) {
  event.preventDefault();
  registerOption.style.display = "none";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  loginFormWrapper.style.display = "block";
});

document.getElementById("login-link").addEventListener("click", function(event) {
  event.preventDefault();

  showLoginForm();

  registerOption.style.display = "block";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  window.location.href = "login.html";
});

document.getElementById("login-link2").addEventListener("click", function(event) {
  event.preventDefault();

  showLoginForm();

  registerOption.style.display = "block";
  registerFormWrapper1.style.display = "none";
  registerFormWrapper2.style.display = "none";
  window.location.href = "login.html";
});

function showLoginForm() {
  const loginWrapper = document.getElementById("login-wrapper");
  const registerWrapper = document.getElementById("register-wrapper");
  
  loginWrapper.classList.remove("fade-out-left");
  loginWrapper.classList.add("fade-in");

  registerWrapper.classList.remove("fade-in-right");
  registerWrapper.classList.add("fade-out");
}

function showRegisterForm() {
  const loginWrapper = document.getElementById("login-wrapper");
  const registerWrapper = document.getElementById("register-wrapper");
  
  loginWrapper.classList.remove("fade-in");
  loginWrapper.classList.add("fade-out-left");

  registerWrapper.classList.remove("fade-out");
  registerWrapper.classList.add("fade-in-right");
}
