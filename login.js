const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");
const userInfo = document.querySelector("#userinfo");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username"

const savedUsername = localStorage.getItem(USERNAME_KEY);
loginForm.addEventListener("submit",onLoginSubmit);
logoutButton.addEventListener("click", onLogoutSubmit);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
} else {
    userInfo.classList.remove(HIDDEN_CLASS);
    userInfo.innerText = `${savedUsername} 으로 로그인 중입니다.`    
    console.log("done");
    loginForm.classList.add(HIDDEN_CLASS);
    logoutButton.classList.remove(HIDDEN_CLASS);
}


function onLoginSubmit(event){    //event 인자가 뭔지 어떻게 알지??

    const username = loginInput.value;  
    console.log(username);

    if (username === null){
        alert("please write your id");
    } else {
        localStorage.setItem(USERNAME_KEY, username);
        loginForm.classList.add(HIDDEN_CLASS);
    }
}

function onLogoutSubmit(){
    localStorage.removeItem(USERNAME_KEY);
    alert("정상적으로 로그아웃 되었습니다.");
    logoutButton.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);
    userInfo.classList.add(HIDDEN_CLASS);
}





