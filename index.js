const btnreg = document.getElementById('register');
btnreg.addEventListener('click', register);

function register() {
    location.href = 'regdata.html';
}

const btnlog = document.getElementById('login');
btnlog.addEventListener('click', login);

function login() {
    location.href = 'login.html';
}

    document.querySelector(".current-year").textContent = new Date().getFullYear();