const loginBox = document.querySelector(".login-box");
const loginForm = loginBox.querySelector("#login-form");
const loginInput = loginBox.querySelector("#login-form input");
const greeting = loginBox.querySelector("#greeting");
const clockBox = document.querySelector("#clock-box");
const upperTable = document.querySelector(".upper-table");
const weatherBox = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintGreetings(userName) {

    greeting.innerText = `Hello, ${userName}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add("appear");
    clockBox.classList.remove("hidden");
    clockBox.classList.add("appear");
    upperTable.classList.add("appear-from-top");
    weatherBox.classList.add("weather-box-appear");
}

function onLoginSubmit(event) {

    event.preventDefault();
    const userName = loginInput.value;

    setTimeout(function() {loginForm.classList.add(HIDDEN_CLASSNAME)}, 340);
    loginForm.classList.add("disappear");
    console.log(userName);    

    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}