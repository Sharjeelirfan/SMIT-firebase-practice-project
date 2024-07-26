// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCksrbh-y7OE5ZP2j0lraZmuZZzZFf0zWA",
  authDomain: "smit-practice-project.firebaseapp.com",
  projectId: "smit-practice-project",
  storageBucket: "smit-practice-project.appspot.com",
  messagingSenderId: "293680194563",
  appId: "1:293680194563:web:b80faca2e558919bb51a36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
const auth = getAuth(app);


const signup_form = document.querySelector("#signup-form")
const signup_email = document.querySelector("#signup-email")
const signup_pass = document.querySelector("#signup-pass")

const login_form = document.querySelector("#login-form");
const login_email = document.querySelector("#login-email");
const login_pass = document.querySelector("#login-pass");



signup_form.addEventListener("submit" , (event) =>{
    event.preventDefault()

    createUserWithEmailAndPassword(auth, signup_email.value, signup_pass.value)

    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

})

login_form.addEventListener("submit" , (event) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, login_email.value, login_pass.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

})