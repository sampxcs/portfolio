(() => {
  "use strict";

  /* ------------------------------------------------------------- */
  /* GLOBAL VARIABLES
  /* ------------------------------------------------------------- */

  const $ = selector => document.querySelector(selector)
  const $$ = selector => document.querySelectorAll(selector)
  

  const body = $("body");
  const nav = $("nav");
  const buttons = $$(".btn");
  const btnTheme = $(".toggle-theme");
  const initialTheme = "dark";

  let formSearch = $(".search-form");
  let inputSearch = $("#search-input");
  let btnSearch = $("#search-button");
  let btnNav = $(".btn-Nav");

  /* -------------------- FORM SEARCH VALIDATION -------------------- */

  formSearch.addEventListener("submit", e => {
    e.preventDefault();
    inputSearch.value = "";
    inputSearch.classList.toggle("active");
    btnSearch.classList.toggle("active");
  });


  /* ------------------------- NAV ANIMATION ------------------------- */

  btnNav.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnNav.classList.toggle("btn-active");
  });

  /* ------------------------- BTN ANIMATION ------------------------- */

  buttons.forEach((btn) => {
    btn.onclick = e => {
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

  /* ------------------------ TOGGLE THEME ------------------------ */

  const setTheme = theme => {
    localStorage.setItem("theme", theme);
    body.setAttribute("data-theme", theme);
  };

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme == "light") {
      btnTheme.classList.replace("fa-moon", "fa-sun")
      setTheme("dark")
    }
    else {
      btnTheme.classList.replace("fa-sun", "fa-moon")
      setTheme("light")
    };
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
