//Login
const btnlog = document.getElementById("btnlog");
btnlog.addEventListener("click", login);
function login(){
    location.href = "data.html";
}

//Register
const btnreg = document.getElementById("btnreg");
btnreg.addEventListener("click", register);
function register(){
    location.href = "regdata.html";
}

//Logout
const btnout = document.getElementById("logout");
btnout.addEventListener("click", lgout);
function lgout(){
    location.href = "index.html";
}