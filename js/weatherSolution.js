let solutionTextArea = document.querySelector("textarea");
let title = document.getElementById("title");
let newSolutions = document.querySelector(".newSolutions");
let addButton = document.getElementById("addButton");
let solutionCounter = 0;

// //make new solutions
let newSolutionFunction = (name, title, sol) => {
  //remove all pagination
  document.querySelectorAll(".paginationContainer").forEach((ele) => {
    ele.remove();
  });
  newSolutions.children[0].children[0].textContent = ++solutionCounter;
  let newSolution = document.createElement("div");
  newSolution.classList.add("newSolution");
  newSolutions.appendChild(newSolution);
  newSolution.innerHTML = `
  <div class="card text-white bg-success mb-3 solution w-100 " >
    <span style="display:none">${solutionCounter}</span>
    <div class="card-header">${name}</div>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${sol}</p>
    </div>
    <button class="btn btn-success my-2 more">More</button>
  </div>
    `;
  // show all solution when press on more button
  let more = document.querySelectorAll(".more");
  more.forEach((ele) => {
    ele.onclick = () => {
      if (ele.textContent === "More") {
        ele.textContent = "Less";
        ele.parentNode.children[2].children[1].style.whiteSpace = "initial";
      } else {
        ele.textContent = "More";
        ele.parentNode.children[2].children[1].style.whiteSpace = "nowrap";
      }
    };
  });

  //hide all solution to use pagination
  if (solutionCounter >= 4) {
    newSolution.style.display = "none";
  }

  //display pagination
  paginationDisplay();
  paginationButton();
};

//function to active pagination button
let paginationButton = () => {
  let allSolution = document.querySelectorAll(".newSolution");
  let allLiPagination = document.querySelectorAll(".page-item");

  allLiPagination.forEach((e) => {
    e.onclick = () => {
      //remove active from all pagination button and hide all solutions
      allLiPagination.forEach((e) => {
        e.classList.remove("active");
        allSolution.forEach((ele) => {
          ele.style.display = "none";
        });
      });
      //active the pagination button and display the solutions of this button
      e.classList.add("active");
      allSolution.forEach((ele) => {
        let number = numberFromString(ele.children[0].children[0].textContent);
        if (
          (e.classList.contains("active") &&
            number === Number(e.children[0].textContent * 3)) ||
          number === Number(e.children[0].textContent * 3 - 1) ||
          number === Number(e.children[0].textContent * 3 - 2)
        ) {
          ele.style.display = "block";
        }
      });
    };
  });
};

//function to make pagination
let paginationCounter = 1;

let li = "";
let paginationDisplay = () => {
  let pagination = document.createElement("nav");
  if (solutionCounter % 3 === 0) {
    li += `<li class="page-item"><a class="page-link" >${paginationCounter}</a></li>`;
    paginationCounter++;
  }
  pagination.innerHTML = `<nav aria-label="Page navigation example" class="paginationContainer">
                                <ul class="pagination">
                                ${li}
                                </ul>
                            </nav>`;
  if (solutionCounter >= 4) {
    pagination.style.display = "block";
  } else {
    pagination.style.display = "none";
  }

  newSolutions.appendChild(pagination);
  paginationButton();
};

paginationDisplay();

//function to get the number from string
let numberFromString = (ele) => {
  let number = "";
  for (let i = 0; i < ele.length; i++) {
    if (Number.isInteger(Number(ele[i]))) {
      number += ele[i];
    }
  }
  return Number(number);
};

// toast
let toastContainer;

function generateToast({
  message,
  background = "#00214d",
  color = "#fffffe",
  length = "3000ms",
}) {
  toastContainer.insertAdjacentHTML(
    "beforeend",
    `<p class="toast" 
    style="background-color: ${background};
    color: ${color};
    animation-duration: ${length}">
    ${message}
  </p>`
  );
  const toast = toastContainer.lastElementChild;
  toast.addEventListener("animationend", () => toast.remove());
}

function initToast() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="toast-container"></div>`
  );
  toastContainer = document.querySelector(".toast-container");
}

initToast(); // Initialize the toast container

addButton.addEventListener("click", () => {
  if (userName != "")
    generateToast({
      message: "✍️ Solution Added Successfully ✍️",
      background: "hsl(51 97.8% 65.1%)",
      color: "hsl(51 97.8% 12.1%)",
      length: "8000ms",
    });
  else 
    generateToast({
      message: "You Must Login First",
      background: "hsl(51 97.8% 65.1%)",
      color: "hsl(51 97.8% 12.1%)",
      length: "8000ms",
    });
});

let userName = ""; // name of user
//function to add the solution
addButton.onclick = function () {
  if (userName != "")
    newSolutionFunction(userName, title.value, solutionTextArea.value);
};

//send data to server

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  update,
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

const firebaseRef = ref(database, "title");
const firebaseRef2 = ref(database, "solution");

addButton.addEventListener("click", () => {
  const titleValue = document.getElementById("title").value;
  const textAreaValue = document.getElementById("solution").value;
  if (titleValue != "" && textAreaValue != "") {
    push(firebaseRef, titleValue);
    push(firebaseRef2, textAreaValue);
    //remove value of title and solution
    title.value = "";
    solutionTextArea.value = "";
  }
});

// get data from server
let usersName = [];
let data = [];
let even = 0;
let odd = 1;
let counter = 0;
let flag = true;
const firebaseRefUser = ref(database, "users");

//get name of user
onValue(firebaseRefUser, (snapshot) => {
  snapshot.forEach((ele) => {
    const user = ele.val();
    if (user.active == true) {
      userName = user.name;
      // make setTimeout to delay update function
      setTimeout(() => {
        const userId = ele.key;
        const firebaseRefUser1 = ref(database, "users/" + userId);
        update(firebaseRefUser1, { active: false });
      }, 1000);
    }

    usersName[counter++] = user.name;
  });
});
onValue(firebaseRef, (snapshot) => {
  snapshot.forEach((ele) => {
    data[even] = ele.val();
    even += 2;
  });
});
onValue(firebaseRef2, (snapshot) => {
  snapshot.forEach((ele) => {
    data[odd] = ele.val();
    odd += 2;
  });
  if (flag) {
    let j = 0;
    for (let i = 0; i < data.length; i++) {
      newSolutionFunction(usersName[j], data[i], data[++i]);
      j++;
    }
    flag = false;
  }
});
