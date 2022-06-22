(() => {
  "use strict";

  let btnNav = document.querySelector(".btn-Nav");
  let nav = document.querySelector("nav");
  let formSearch = document.querySelector(".search-form");
  let inputSearch = document.querySelector("#search-input");
  let btnSearch = document.querySelector("#search-button");
  let buttons = document.querySelectorAll(".btn");

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    inputSearch.value = "";
    inputSearch.classList.toggle("active");
    btnSearch.classList.toggle("active");
  });

  btnNav.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnNav.classList.toggle("btn-active");
  });

  buttons.forEach((btn) => {
    btn.onclick = function (e) {
      console.log(e.clientX);
      console.log(e.target.offsetLeft);
      console.log(e.target.offsetTop);
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      console.log(x, y);
      let ripple = document.createElement("span");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      this.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };
  });

  const body = document.querySelector("body");
  const btnTheme = document.querySelector(".theme-selector");
  const initialTheme = "dark";

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    body.setAttribute("data-theme", theme);
  };

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem("theme");

    if (activeTheme == "light") setTheme("dark");
    else setTheme("light");
  };

  const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme
      ? body.setAttribute("data-theme", savedTheme)
      : setTheme(initialTheme);
  };

  setThemeOnInit();

  btnTheme.addEventListener("click", toggleTheme);
})();
