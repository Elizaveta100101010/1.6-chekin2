const navLinks = document.querySelectorAll(".nav-barmenu__link");

export function linkStyleChange() {
  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      let activeClass = document.querySelector(".nav-barmenu__link--active");
      activeClass.className = activeClass.className.replace(
        " nav-barmenu__link--active",
        ""
      );
      item.className += " nav-barmenu__link--active";
    });
  });
}
