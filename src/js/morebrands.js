const brandsExpand = document.querySelector(".brands__show-more");
const swiperContainer = document.querySelectorAll(".hiddencard");
const breakpointtext = window.matchMedia("(min-width:1140px)");


export function moreBrands() {
  if (breakpointtext.matches === true) {
    for (let i = 0; i < 2; i++) {
      let btn = swiperContainer[i];
    btn.classList.remove("hiddencard");
    }
      } 

  let brandsExpanded = false;
  brandsExpand.addEventListener("click", () => {
    if (brandsExpanded === false) {
      brandsExpand.classList.add("show-more--active");
      for (let i = 0; i < swiperContainer.length; i++) {
        let btn = swiperContainer[i];
      btn.classList.add("hiddencard--active");
      }
      brandsExpand.textContent = "Скрыть";
      brandsExpanded = true;
    } else {
      brandsExpand.classList.remove("show-more--active");
      brandsExpand.textContent = "Показать все";
      for (let i = 0; i < swiperContainer.length; i++) {
      let btn = swiperContainer[i];
      btn.classList.remove("hiddencard--active");
      }
      brandsExpanded = false;
    }
  });
}
