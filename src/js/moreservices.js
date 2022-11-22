const brandsExpand = document.querySelector(".container2__show-more");
const swiperContainer = document.querySelectorAll(".hiddencard2");
const breakpointtext = window.matchMedia("(min-width:1140px)");
export function moreServices() {

  if (breakpointtext.matches === true) {
    for (let i = 0; i < 1; i++) {
      let btn = swiperContainer[i];
    btn.classList.remove("hiddencard2");
    }
      }

  let brandsExpanded = false;
  brandsExpand.addEventListener("click", () => {
    if (brandsExpanded === false) {
      brandsExpand.classList.toggle("show-more--active");
      for (let i = 0; i < swiperContainer.length; i++) {
        let btn = swiperContainer[i];
      btn.classList.toggle("hiddencard2--active");
      }
      brandsExpand.textContent = "Скрыть";
      brandsExpanded = true;
    } else {
      brandsExpand.classList.toggle("show-more--active");
      brandsExpand.textContent = "Показать все";
      for (let i = 0; i < swiperContainer.length; i++) {
        let btn = swiperContainer[i];
      btn.classList.toggle("hiddencard2--active");
      }
      brandsExpanded = false;
    }
  });
}