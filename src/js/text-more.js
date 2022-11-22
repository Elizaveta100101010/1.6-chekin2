const readMoreExpand = document.querySelector(".content__more");
const textMd = document.querySelector(".content__company--2nd");
const textLg = document.querySelector(".content__company--3rd");
const breakpointtext = window.matchMedia("(min-width:1440px)");
let textExpanded = false;

export function moreText() {

  if (breakpointtext.matches === true) {
    readMoreExpand.textContent = "Скрыть";
    textExpanded = true;
      } 
  readMoreExpand.addEventListener("click", () => {

    
if (textExpanded === false){
    textMd.style.display = "inline";
    textLg.style.display = "inline";
    readMoreExpand.textContent = "Скрыть";
    readMoreExpand.classList.add("content__more--active");
    textExpanded = true;
}
else{

  textMd.style.display = "none";
  textLg.style.display = "none";
  readMoreExpand.textContent = "Читать далее";
  readMoreExpand.classList.remove("content__more--active");
   textExpanded = false;
}
  });
}
