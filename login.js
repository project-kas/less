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
//alert("Firebase Realtime Database initialized successfully.");

//Enter key button press
const input = document.getElementById("regno");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnlog").click();
    }})
const BtnCheck = document.getElementById("btnlog");
//add event listener to button
BtnCheck.addEventListener("click", CheckData);
//function to add data
function CheckData() {

    //create session storage items
    sessionStorage.setItem('RegNo', document.getElementById("regno").value);
    const session = sessionStorage.getItem('RegNo');
    

    const phone = document.getElementById("uphone").value;
    const uid = document.getElementById("regno").value;

    if (phone === "") {
        alert("Please Enter PHONE.NO!");
        return;
    }
    if (uid === "") {
        alert("Please Enter REG.NO!");
        return;
    }
    const userRef = ref(db, 'Members/' + uid);
    get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                //alert("Reg/ID_Num already in Use!"+ data.Name);
                if (data.Reg_Num === uid) {
                    if (data.Phone === phone) {
                        document.getElementById("uphone").value = "";
                        document.getElementById("regno").value = "";
                        sessionStorage.setItem('name', data.Name);
                        sessionStorage.setItem('stat', data.Status);
                        sessionStorage.setItem('cont', data.Phone);
                        sessionStorage.setItem('gender', data.Gender);
                        window.location.href = "mypage.html";
                    }else{
                    alert("Incorrect Login Details!");}
            }
            } if (!snapshot.exists()) {
                alert("Reg/ID_Num not Found!");
            }
        }).catch((error) => {
            console.error(error);
            alert(error);
        });
}

//Register
const btnreg = document.getElementById("btnreg1");
btnreg.addEventListener("click", register);
function register(){
    location.href = "regdata.html";
}

//Home
const btnhome = document.getElementById("home");
btnhome.addEventListener("click", home);
function home(){
    location.href = "index.html";
}

document.querySelector(".current-year").textContent = new Date().getFullYear();