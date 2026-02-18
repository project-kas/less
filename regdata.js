//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, set, ref, get } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
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
//check connection
//alert("Firebase Realtime Database initialized successfully.");

//ADD DATA TO DATABASE

//declare button
const BtnAdd = document.getElementById("btnreg1");
//add event listener to button
BtnAdd.addEventListener("click", AddData);
//function to add data
function AddData() {

    function titleCase(name1) {
        return name1.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const fname = document.getElementById("fname").value;
    const mname = document.getElementById("mname").value;
    const lname = document.getElementById("lname").value;
    const name1 = fname + " " + mname + " " + lname;
    const name = titleCase(name1);
    const gender = document.getElementById("gender").value;
    const uid = document.getElementById("uid").value;
    const uphone = document.getElementById("uphone").value;
    const uaddress = document.getElementById("uaddress").value;
    const ustatus = "Pending";

    if (uid === "") {
        alert("Please Enter Reg/ID_Num!");
        return;
    }
    const userRef = ref(db, 'Members/' + uid);
    get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                //const data = snapshot.val();

                alert("Reg/ID_Num already in Use!");

            } if (!snapshot.exists()) {
                set(userRef, {
                    Reg_Num: uid,
                    Name: name,
                    Phone: uphone,
                    Gender: gender,
                    Status: ustatus,
                    Address: uaddress
                })
                    .then(() => {
                        alert("Successfully Registered!");
                    })
                    .catch((error) => {
                        alert("Failed to Update Data!" + error);
                    });

            } else {

            }
        }).catch((error) => {
            alert("Failed to Load Data!" + error);
        });
}

//Logout
const btnout = document.getElementById("btnlog");
btnout.addEventListener("click", login);
function login() {
    location.href = "login.html";
}

//Home
const btnhome = document.getElementById("home");
btnhome.addEventListener("click", home);
function home() {
    location.href = "index.html";
}

document.querySelector(".current-year").textContent = new Date().getFullYear();