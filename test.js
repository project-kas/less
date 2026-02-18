//imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase, ref, get, set, remove} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
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

const btnset = document.getElementById('btnset');
btnset.addEventListener("click", function (event) {
    event.preventDefault();
    const uname = document.getElementById('uname').value;
    const pass = document.getElementById('upass').value;

    const dbconn = ref(db, 'Logs/' + uname);

    set(dbconn, {
        Username: uname,
        Password: pass
    })
        .then(() => {
            console.log('SET');
        })
        .catch((error) => {
            console.log('Failed ' + error);
        });
})

const btnget = document.getElementById('btnget');
btnget.addEventListener("click", function (event) {
    event.preventDefault();
    const uname = document.getElementById('uname').value;

    const dbconn = ref(db, 'Logs/' + uname);

    get(dbconn)
        .then(snapshot => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                console.log('Username: ' + data.Username + " Password: " + data.Password);
            }
        }).catch((error) => {
            console.log('Failed: ' + error);
        })
})

const btnrmv = document.getElementById('btnremove');
btnrmv.addEventListener('click', function (event){
    event.preventDefault();
    const uname = document.getElementById('uname').value;

    const dbconn = ref(db, 'Logs/' + uname);

    remove(dbconn)
    .then(() =>{
        console.log('Removed');
    }).catch((error) =>{
        console.log('Failed: '+error);
    });
})