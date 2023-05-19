import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQf-LdfusY7r6VhenoGruJSs6WxWPhNBU",
  authDomain: "database-2e0a9.firebaseapp.com",
  projectId: "database-2e0a9",
  storageBucket: "database-2e0a9.appspot.com",
  messagingSenderId: "42911705391",
  appId: "1:42911705391:web:9254c1fef3a066414ad9da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

// signUp section
const signUpButton = document.getElementById("signUpButton");
const firebaseRefUser = ref(database, "users"); // Reference to the "users" node in Firebase
signUpButton.onclick = () => {
  let flag = true;
  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("useremil").value;
  const passwordValue = document.getElementById("userpassword").value;
  onValue(firebaseRefUser, (snapshot) => {
    snapshot.forEach((ele) => {
      if (emailValue === ele.val().email) {
        flag = false;
      }
    });
    if (flag && nameValue != "" && emailValue != "" && passwordValue != "") {
      const user = {
        // Create an object with user details
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      };
      push(firebaseRefUser, user); // Push the user object to the "users" node
      window.location.href = "/log.html";
    }
  });  
};

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

