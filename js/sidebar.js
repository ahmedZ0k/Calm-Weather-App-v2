const Body = document.querySelector("body");
const sidebar = document.createElement("nav");
sidebar.classList.add("sidebar", "close");
sidebar.innerHTML = `
      <header class="head">
        <div class="image-text">
          <span class="image">
            <img src="images/logo.png" alt="" />
          </span>
          <div class="text logo-text">
            <span class="sidebar-name">Calm</span>
            <span class="title">Weather Web</span>
          </div>
        </div>
        <i class="bx bx-chevron-left toggle"></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="side-link">
              <a href="./index.html">
                <i class="bx bx-home-alt icon"></i>
                <span class="text nav-text">Home</span>
              </a>
            </li>

            <li class="side-link">
              <a href="./calm.html">
                <i class="bx bxl-tailwind-css icon"></i>
                <span class="text nav-text">Weather</span>
              </a>
            </li>

            <li class="side-link">
              <a href="./mainNews.html">
                <i class="bx bx-news icon"></i>
                <span class="text nav-text">Main News</span>
              </a>
            </li>
            <li class="side-link">
              <a href="./news.html">
                <i class='bx bx-news icon'></i>
                <span class="text nav-text">News</span>
              </a>
            </li>
            <li class="side-link">
              <a href="./weatherSolution.html">
                <i class="bx bx-edit-alt icon"></i>
                <span class="text nav-text">Suggest Solution</span>
              </a>
            </li>
            <li class="side-link">
              <a href="./counter.html">
                <i class='bx bx-stopwatch icon'></i>
                <span class="text nav-text">cop 28</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="bottom-content">
          <li class="">
            <a href="./login.html">
              <i class="bx bx-log-in icon"></i>
              <span class="text nav-text">Login</span>
            </a>
          </li>
        </div>
      </div>
`;
setTimeout(() => {
  const toggle = document.querySelector(".toggle"),
    leftToggle = document.querySelector(".bx-chevron-left");
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
  leftToggle.onclick = () => {
    if (sidebar.classList.contains("close"))
      leftToggle.classList.replace("bx-chevron-right", "bx-chevron-left");
    else leftToggle.classList.replace("bx-chevron-left", "bx-chevron-right");
  };
}, 1000);
Body.appendChild(sidebar);
