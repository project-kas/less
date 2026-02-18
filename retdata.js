//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, remove, ref, get, set } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
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

//READ DATA FROM DATABASE

//declare button
const BtnRet = document.getElementById("btnret");
//add event listener to button
BtnRet.addEventListener("click", ReadData);
//function to add data

function ReadData() {

    const uid = document.getElementById("uid").value;
    if (uid === "") {
        alert("Please Enter Reg/ID_Num!");
        return;
    }
    const userRef = ref(db, 'Members/' + uid);
    get(userRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                document.getElementById("uid").value = data.Reg_Num;
                document.getElementById("uname").value = data.Name;
                document.getElementById("gender").value = data.Gender;
                document.getElementById("uphone").value = data.Phone;
                document.getElementById("ustatus").value = data.Status;
                document.getElementById("uaddress").value = data.Address;
            }
            if (!snapshot.exists()) {
                alert("Reg/ID_Num NOT Found!");
            }
        })

}

//REMOVE DATA FROM DATABASE

//declare button
const BtnDel = document.getElementById("btndel");
//add event listener to button
BtnDel.addEventListener("click", DeleteData);
//function to remove data
function DeleteData() {

    const uid = document.getElementById("uid").value;
    if (uid === "") {
        alert("Please Enter Reg/ID_Num!");
        return;
    }
    const pass = prompt("Confirm Access Code:");

    if (pass === "kasewa") {
        const conf = confirm("Confirm deletion of Data for Reg/ID_Num: " + uid + "!");
        if (conf === true) {

            const userRef = ref(db, 'Members/' + uid);
            get(userRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        remove(userRef)
                            .then(() => {
                                alert("Successfully Deleted!");
                                document.getElementById("uid").value = "";
                                document.getElementById("uname").value = "";
                                document.getElementById("gender").value = "";
                                document.getElementById("uphone").value = "";
                                document.getElementById("ustatus").value = "";
                                document.getElementById("uaddress").value = "";
                            })
                            .catch((error) => {
                                alert("Failed to Delete Data: " + error);
                            });
                    }

                    if (!snapshot.exists()) {
                        alert("Reg/ID_Num NOT Found!");
                        document.getElementById("uid").value = "";
                        document.getElementById("uname").value = "";
                        document.getElementById("gender").value = "";
                        document.getElementById("uphone").value = "";
                        document.getElementById("ustatus").value = "";
                        document.getElementById("uaddress").value = "";
                    }
                })
                .catch((error) => {
                    alert("Failed to Load Data!" + error);
                });
        }
        else {
            alert("Deletion Cancelled.");
        }

    }
    else {
        alert("Access Denied.");
    }
}

//REMOVE ALL DATA FROM DATABASE

//declare button   
const BtnDelAll = document.getElementById("btnclear");
//add event listener to button
BtnDelAll.addEventListener("click", DeleteAllData);
//function to remove all data
function DeleteAllData() {
    const pass = prompt("Confirm Access Code:");
    if (pass === "kasewa") {
        const del = confirm("Warning! This action will delete ALL data in the database. This action cannot be undone.");
        if (del === true) {
            const userRef = ref(db, 'Members/');
            remove(userRef)
                .then(() => {
                    alert("All Data Successfully Deleted!");
                    document.getElementById("uid").value = "";
                    document.getElementById("uname").value = "";
                    document.getElementById("gender").value = "";
                    document.getElementById("uphone").value = "";
                    document.getElementById("ustatus").value = "";
                    document.getElementById("uaddress").value = "";
                })
                .catch((error) => {
                    alert("Failed to Delete All Data: " + error);
                });
        }
        else {
            alert("Deletion Cancelled.");
        }
    }
    else {
        alert("Access Denied.");
    }
}

//CHANGE DATA IN DATABASE

//declare button
const BtnUpd = document.getElementById("btnupd");
//add event listener to button
BtnUpd.addEventListener("click", UpdateData);
//function to update data


function UpdateData() {
    const uid = document.getElementById("uid").value;
    if (uid === "") {
        alert("Please Enter Reg/ID_Num!");
        return;
    }
    const pass2 = prompt("Confirm Access Code:");

    if (pass2 === "kasewa") {

        function titleCase(name1) {
            return name1.toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        const name1 = document.getElementById("uname").value;
        const name = titleCase(name1);
        const gender = document.getElementById("gender").value;

        const uphone = document.getElementById("uphone").value;
        const ustatus = document.getElementById("ustatus").value;
        const uaddress = document.getElementById("uaddress").value;

        const userRef = ref(db, 'Members/' + uid);
        get(userRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    //const data = snapshot.val();
                    set(userRef, {
                        Reg_Num: uid,
                        Name: name,
                        Phone: uphone,
                        Gender: gender,
                        Status: ustatus,
                        Address: uaddress
                    })
                        .then(() => {
                            alert("Successfully Updated!");
                        }).catch((error) => {
                            alert("Failed to Update Data: " + error);
                        })
                }

                if (!snapshot.exists()) {
                    alert("Reg/ID_Num NOT Found!");
                    document.getElementById("uid").value = "";
                    document.getElementById("uname").value = "";
                    document.getElementById("gender").value = "";
                    document.getElementById("uphone").value = "";
                    document.getElementById("ustatus").value = "";
                    document.getElementById("uaddress").value = "";
                }
            })
            .catch((error) => {
                alert("Failed to Load Data!" + error);
            });
    }
    else {
        alert("Access Denied.");

    }
}

document.querySelector(".current-year").textContent = new Date().getFullYear();
