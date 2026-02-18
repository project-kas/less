
const uid = sessionStorage.getItem('RegNo');
if(!uid){
    alert("Please Login!");
    location.href = 'login.html';
}
//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
//config
const firebaseConfig = {
    apiKey: "AIzaSyA4KJe2PBLCuEwg0zmDQ0ckSHA9qz8zSD4",
    authDomain: "kaka-c51be.firebaseapp.com",
    databaseURL: "https://kaka-c51be-default-rtdb.firebaseio.com",
    projectId: "kaka-c51be",
    storageBucket: "kaka-c51be.firebasestorage.app",
    messagingSenderId: "841320949377",
    appId: "1:841320949377:web:014aff10194c2bf70bcf80"
};
//declare app & database
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const userRef = ref(db, 'Members/' + uid);

get(userRef)
.then(snapshot =>{
    if(snapshot.exists()){
        const data = snapshot.val();
        document.getElementById('reg').innerText = data.Reg_Num;
        document.getElementById('uname').innerText = data.Name;
        document.getElementById('ustat').innerText = data.Status;
        const status = data.Status;
        if(status === 'Pending'){
            document.getElementById('ustat').style.background = 'red';
        }else if(status === 'Registered'){
            document.getElementById('ustat').style.background = 'green';
        }
        document.getElementById('uphone').innerText = data.Phone;
        document.getElementById('ugender').innerText = data.Gender;
        document.getElementById('uaddress').innerText = data.Address;
    }
}).catch((error) =>{
    alert("Failed to Load Data: "+error);
});


document.querySelector(".current-year").textContent = new Date().getFullYear();

 //Logout
const btnlog = document.getElementById('logout');
btnlog.addEventListener("click", function (event){
    event.preventDefault();
    sessionStorage.clear();
    location.href = 'login.html';
});
