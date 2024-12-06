// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDmSC8v-A1e1UlAbBnaonpP6oTYuqaDB38",
    authDomain: "login-page-8e88a.firebaseapp.com",
    projectId: "login-page-8e88a",
    storageBucket: "login-page-8e88a.firebasestorage.app",
    messagingSenderId: "345353738525",
    appId: "1:345353738525:web:246c7b889ed13c38bd29f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elements
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");

// Signup form elements
const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const repeatPassword = document.getElementById("repeatPassword");

// Switch Forms
showSignup.addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});
showLogin.addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

// Sign Up
signupButton.addEventListener("click", async () => {
    const name = signupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    const confirmPassword = repeatPassword.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    } catch (error) {
        alert(error.message);
    }
});

// Login
loginButton.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        // Redirect to your website
        window.location.href = "https://gkbishnoi07.github.io/project1/"; // Replace with your desired URL
    } catch (error) {
        alert(error.message);
    }
});
