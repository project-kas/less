const btnprof = document.getElementById('update');
btnprof.addEventListener('click', UpdateProfile);

function UpdateProfile() {
    location.href = 'retdata.html';
}

const btnlog = document.getElementById('logout');
btnlog.addEventListener('click', Logout);

function Logout() {
    location.href = 'index.html';
}

    document.querySelector(".current-year").textContent = new Date().getFullYear();