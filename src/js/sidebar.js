const openMenuBtn = document.querySelector(".header__burger-button");
const closeMenuBtn = document.querySelector(".header-menu__cl-button");
const menu = document.querySelector(".burger-menu");
const blur = document.querySelector(".blur");

export function openCloseMenu() {
  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("burger-menu--opened");
    document.body.style.overflow = "hidden";
    blur.classList.add("blur--active");
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("burger-menu--opened");
    document.body.style.overflow = "";
    blur.classList.remove("blur--active");
  });
  
  blur.addEventListener("click", () => {
    menu.classList.remove("burger-menu--opened");
    blur.classList.remove("blur--active");
    document.body.style.overflow = "";
  });

}