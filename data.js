if (!sessionStorage.getItem('RegNo')) {
    alert("Please login first!");
    location.href = "login.html";
}
//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, get, set, } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
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


let table = document.getElementById("mytable");

function insertRow(data) {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    const count = table.rows.length - 1;

    cell1.innerText = count;
    cell2.innerText = data.Name;
    cell3.innerText = data.Gender;
    cell4.innerText = data.Reg_Num;
    cell5.innerText = data.Phone;
    cell6.innerText = data.Status;
    if (data.Status === "Registered") {
        cell6.style.backgroundColor = "lightgreen";
        cell6.style.color = "black";
    } else {
        cell6.style.backgroundColor = "lightcoral";
        cell6.style.color = "white";
    }
}

get(ref(db, 'Members/'))
    .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            insertRow(data);
        });
    }).catch((error) => {
        console.error("Error fetching data: ", error);
    });


    const ret = document.getElementById('retv');
    ret.addEventListener("click", retrieve);

    function retrieve(){
        document.getElementById("data").style.display = "none";
        document.getElementById("popup").style.display = "flex";
    }