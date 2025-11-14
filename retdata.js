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
    const userRef = ref(db, 'Members/' + uid);
    remove(userRef)
        .then(() => {
            alert("Successfully Deleted!");
            document.getElementById("uid").value = "";
            document.getElementById("uname").value = "";
            document.getElementById("gender").value = "";
            document.getElementById("uphone").value = "";
            document.getElementById("ustatus").value = "";
        })
        .catch((error) => {
            alert("Failed to Delete Data: " + error);
        });
}

//CHANGE DATA IN DATABASE

//declare button
const BtnUpd = document.getElementById("btnupd");
//add event listener to button
BtnUpd.addEventListener("click", UpdateData);
//function to update data


function UpdateData() {

    const name = document.getElementById("uname").value;
    const gender = document.getElementById("gender").value;
    const uid = document.getElementById("uid").value;
    const uphone = document.getElementById("uphone").value;
    const ustatus = document.getElementById("ustatus").value;

    if (uid === "") {
        alert("Please Enter Reg/ID_Num!");
        return;
    }
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
                    Status: ustatus
                })
                    .then(() => {
                        alert("Successfully Updated!");
                    }).catch((error) => {
                        alert("Failed to Update Data!" + error);
                    })
            }

            if (!snapshot.exists()) {
                alert("Reg/ID_Num NOT Found!");
                document.getElementById("uid").value = "";
                document.getElementById("uname").value = "";
                document.getElementById("gender").value = "";
                document.getElementById("uphone").value = "";
                document.getElementById("ustatus").value = "";
            }
        })
        .catch((error) => {
            alert("Failed to Load Data!" + error);
        });
}
