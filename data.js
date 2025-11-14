//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {getDatabase, ref, get, set, } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
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
    cell1.innerText = data.Name;
    cell2.innerText = data.Gender;
    cell3.innerText = data.Reg_Num;
    cell4.innerText = data.Phone;
    cell5.innerText = data.Status;
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
