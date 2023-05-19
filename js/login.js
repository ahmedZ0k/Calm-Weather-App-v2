import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  update
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

const loginButton = document.getElementById("loginButton");
const firebaseRefUser = ref(database, "users"); 
loginButton.onclick = () => {
  const emailValue = document.getElementById("useremil").value;
  const passwordValue = document.getElementById("userpassword").value;

  onValue(firebaseRefUser, (snapshot) => {
    snapshot.forEach((ele) => {
      const user = ele.val();
      if (user.email === emailValue && user.password === passwordValue) {
        // update the user record to set active to true
        const updates = {};
        updates[ele.key + '/active'] = true;
        update(firebaseRefUser, updates);

        window.location.href = "/weatherSolution.html";
      } else {
        const wrong = document.querySelector(".wrong");
        wrong.style.display = "block";
      }
    });
  });
};
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
});
document.getElementById("signUp").onclick = () => {
    window.location.href = "/signUp.html"
};
