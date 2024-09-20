// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

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
const database = getDatabase(app);

const submit = document.getElementById('btnIniciar');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const institucion = document.getElementById('institucion').value;
    const semestre = document.getElementById('semestre').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // Guardar los datos del usuario en Realtime Database
            set(ref(database, 'usuarios/' + user.uid), {
                email: email,
                institucion: institucion,
                semestre: semestre
            })
            .then(() => {
                Swal.fire({
                    position: "",
                    icon: "success",
                    title: "Registro exitoso",
                    showConfirmButton: false,
                    timer: 1500
                  });
                window.location.href = "chat.html";
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "ERROR",
                    text: "Error al guardar los datos: " + error.message
                  });
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Error al guardar los datos: " + error.message
              });
            // ..
        });

})