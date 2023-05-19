import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
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
const database = getDatabase(app);

// change password section

const confirm = document.getElementById("confirm");
const firebaseRefUser = ref(database, "users"); // Reference to the "users" node in Firebase
confirm.onclick = () => {
  const emailValue = document.getElementById("email").value;
  const newPasswordValue = document.getElementById("newPassword").value;
  const confirmNewPasswordValue =
    document.getElementById("confirmNewPassword").value;

  onValue(firebaseRefUser, (snapshot) => {
    snapshot.forEach((ele) => {
      const user = ele.val();
      if (
        user.email === emailValue &&
        newPasswordValue === confirmNewPasswordValue
      ) {
        const userId = ele.key;
        const firebaseRefUser1 = ref(database, "users/" + userId);
        update(firebaseRefUser1, { password: newPasswordValue });
        window.location.href = "/login.html"
      }
    });
  });
};

document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();
});

