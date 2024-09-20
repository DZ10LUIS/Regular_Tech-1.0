// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-6KLVMx85gO_ve0mNbijnQlv5UFqLtXg",
    authDomain: "reguul-teck.firebaseapp.com",
    projectId: "reguul-teck",
    storageBucket: "reguul-teck.appspot.com",
    messagingSenderId: "948701035807",
    appId: "1:948701035807:web:5205e7a734e7a1ed15442a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('btnIniciar');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login Account...")
            window.location.href = "chat.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: "error",
                title: "Denegado",
                text: "correo y/o contraseña incorrecta"
              });
            // ..
        });

})