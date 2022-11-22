const menuItems = document.querySelectorAll(".nav-bar__button");

export function slideMenuStyleChange() {
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      let activeClass = document.querySelector(".nav-bar__button--active");
      activeClass.className = activeClass.className.replace(
        " nav-bar__button--active",
        ""
      );
      item.className += " nav-bar__button--active";
    });
  });
}
