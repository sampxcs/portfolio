(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const body = $("body");
  const nav = $("nav");
  const btnTheme = $(".toggle-theme");
  const sections = $$("section");
  const selectLang = $("select");
  const btnNav = $(".btn-Nav");
  const navLinks = $$(".nav-link")
  const initialTheme = "dark";

  /* -------------------- SCROLL ANIMATION -------------------- */

  const showSection = () => {
    sections.forEach((section) => {
      if (section.offsetTop - 700 < document.documentElement.scrollTop) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };
  window.addEventListener("scroll", showSection);

  /* -------------------- SELECT LANG -------------------- */

  const setLang = () => {
    switch (selectLang.value) {
      case 'en':
        location.href = '/index.html'
        break;
      case 'es':
        location.href = 'es/index.html'
        break
    }
  }
  selectLang.addEventListener('change', setLang)

  /* ------------------------- NAV ANIMATION ------------------------- */

  const activeNav = () => {
    nav.classList.toggle("active");
    btnNav.classList.toggle("btn-active");
  }
  btnNav.addEventListener("click", activeNav);
  navLinks.forEach(link => {
    link.addEventListener("click", activeNav);
  })

  /* ------------------------ TOGGLE THEME ------------------------ */

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    body.setAttribute("data-theme", theme);
  };
  const toggleTheme = () => {
    const activeTheme = localStorage.getItem("theme");
    if (activeTheme == "light") {
      btnTheme.classList.replace("fa-moon", "fa-sun");
      setTheme("dark");
    } else {
      btnTheme.classList.replace("fa-sun", "fa-moon");
      setTheme("light");
    }
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
