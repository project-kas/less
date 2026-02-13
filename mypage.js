document.querySelector(".current-year").textContent = new Date().getFullYear();

 //Logout
const btnlog = document.getElementById('logout');
btnlog.addEventListener("click", logout);

function logout(){
    sessionStorage.clear();
    location.href = "login.html";
}
