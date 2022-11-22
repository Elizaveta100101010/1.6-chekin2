const openFeedbackBtn = document.querySelectorAll(".chat");
const closeFeedbackBtn = document.querySelectorAll(".feedback__close-btn");
const feedback = document.querySelector(".feedback");
const ordercall = document.querySelector(".ordercall");
const openCallBtn = document.querySelectorAll(".call");
const blur = document.querySelector(".blur");



export function openCloseFeedback() {
  for (let i = 0; i < openFeedbackBtn.length; i++) {
    let btn = openFeedbackBtn[i];
    btn.addEventListener("click", () => {
      feedback.classList.add("feedbackopen--opened");
      document.body.style.overflow = "hidden";
      blur.classList.add("blur--active");
      blur.classList.add("blur--active2");
    });
  }

  let btn2 =  closeFeedbackBtn[0];
  btn2.addEventListener("click", () => {
    feedback.classList.remove("feedbackopen--opened");
    document.body.style.overflow = "";
    blur.classList.remove("blur--active");
    blur.classList.remove("blur--active2");
  });

  blur.addEventListener("click", () => {
    feedback.classList.remove("feedbackopen--opened");
    blur.classList.remove("blur--active");
    blur.classList.remove("blur--active2");
    document.body.style.overflow = "";
  });
}

export function openCloseCall() {
  for (let i = 0; i < openCallBtn.length; i++) {
    let btn = openCallBtn[i];
    btn.addEventListener("click", () => {
      ordercall.classList.add("ordercall--opened");
      document.body.style.overflow = "hidden";
      blur.classList.add("blur--active");
      blur.classList.add("blur--active2");
    });
  }
let btn2 = closeFeedbackBtn[1];
  btn2.addEventListener("click", () => {
    ordercall.classList.remove("ordercall--opened");
    document.body.style.overflow = "";
    blur.classList.remove("blur--active");
    blur.classList.remove("blur--active2");
  });
  
  blur.addEventListener("click", () => {
    feedback.classList.remove("feedbackopen--opened");
    blur.classList.remove("blur--active");
    blur.classList.remove("blur--active2");
    document.body.style.overflow = "";
  });
}