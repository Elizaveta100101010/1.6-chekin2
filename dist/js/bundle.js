!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var r=window.matchMedia("(min-width:768px)"),o=document.querySelectorAll(".swiper-container");var c=document.querySelector(".header__burger-button"),a=document.querySelector(".header-menu__cl-button"),i=document.querySelector(".burger-menu"),l=document.querySelector(".blur");var s=document.querySelectorAll(".chat"),d=document.querySelectorAll(".feedback__close-btn"),u=document.querySelector(".feedback"),v=document.querySelector(".ordercall"),m=document.querySelectorAll(".call"),f=document.querySelector(".blur");var b=document.querySelector(".brands__show-more"),y=document.querySelectorAll(".hiddencard"),L=window.matchMedia("(min-width:1140px)");var p=document.querySelectorAll(".nav-bar__button");var h=document.querySelectorAll(".nav-barmenu__link");var _=document.querySelector(".content__more"),w=document.querySelector(".content__company--2nd"),S=document.querySelector(".content__company--3rd"),g=window.matchMedia("(min-width:1440px)"),k=!1;var q=document.querySelector(".container2__show-more"),E=document.querySelectorAll(".hiddencard2"),x=window.matchMedia("(min-width:1140px)");!function(){if(!0===x.matches)for(var e=0;e<1;e++){E[e].classList.remove("hiddencard2")}var t=!1;q.addEventListener("click",(function(){if(!1===t){q.classList.toggle("show-more--active");for(var e=0;e<E.length;e++){E[e].classList.toggle("hiddencard2--active")}q.textContent="Скрыть",t=!0}else{q.classList.toggle("show-more--active"),q.textContent="Показать все";for(var n=0;n<E.length;n++){E[n].classList.toggle("hiddencard2--active")}t=!1}}))}(),!0===g.matches&&(_.textContent="Скрыть",k=!0),_.addEventListener("click",(function(){!1===k?(w.style.display="inline",S.style.display="inline",_.textContent="Скрыть",_.classList.add("content__more--active"),k=!0):(w.style.display="none",S.style.display="none",_.textContent="Читать далее",_.classList.remove("content__more--active"),k=!1)})),h.forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector(".nav-barmenu__link--active");t.className=t.className.replace(" nav-barmenu__link--active",""),e.className+=" nav-barmenu__link--active"}))})),p.forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector(".nav-bar__button--active");t.className=t.className.replace(" nav-bar__button--active",""),e.className+=" nav-bar__button--active"}))})),o.forEach((function(e){var t,n=function(){if(!0!==r.matches)return!1===r.matches?o():void 0;void 0!==t&&t.destroy(!0,!0)},o=function(){t=new Swiper(e,{slideClass:"card",loop:!1,slidesPerView:"auto",centeredSlides:!1,a11y:!0,keyboardControl:!0,grabCursor:!0,pagination:{el:e.querySelector(".swiper-pagination"),clickable:!0}})};r.addEventListener("change",(function(){n()})),n()})),c.addEventListener("click",(function(){i.classList.add("burger-menu--opened"),document.body.style.overflow="hidden",l.classList.add("blur--active")})),a.addEventListener("click",(function(){i.classList.remove("burger-menu--opened"),document.body.style.overflow="",l.classList.remove("blur--active")})),l.addEventListener("click",(function(){i.classList.remove("burger-menu--opened"),l.classList.remove("blur--active"),document.body.style.overflow=""})),function(){for(var e=0;e<s.length;e++){s[e].addEventListener("click",(function(){u.classList.add("feedbackopen--opened"),document.body.style.overflow="hidden",f.classList.add("blur--active"),f.classList.add("blur--active2")}))}d[0].addEventListener("click",(function(){u.classList.remove("feedbackopen--opened"),document.body.style.overflow="",f.classList.remove("blur--active"),f.classList.remove("blur--active2")})),f.addEventListener("click",(function(){u.classList.remove("feedbackopen--opened"),f.classList.remove("blur--active"),f.classList.remove("blur--active2"),document.body.style.overflow=""}))}(),function(){for(var e=0;e<m.length;e++){m[e].addEventListener("click",(function(){v.classList.add("ordercall--opened"),document.body.style.overflow="hidden",f.classList.add("blur--active"),f.classList.add("blur--active2")}))}d[1].addEventListener("click",(function(){v.classList.remove("ordercall--opened"),document.body.style.overflow="",f.classList.remove("blur--active"),f.classList.remove("blur--active2")})),f.addEventListener("click",(function(){u.classList.remove("feedbackopen--opened"),f.classList.remove("blur--active"),f.classList.remove("blur--active2"),document.body.style.overflow=""}))}(),function(){if(!0===L.matches)for(var e=0;e<2;e++){y[e].classList.remove("hiddencard")}var t=!1;b.addEventListener("click",(function(){if(!1===t){b.classList.add("show-more--active");for(var e=0;e<y.length;e++){y[e].classList.add("hiddencard--active")}b.textContent="Скрыть",t=!0}else{b.classList.remove("show-more--active"),b.textContent="Показать все";for(var n=0;n<y.length;n++){y[n].classList.remove("hiddencard--active")}t=!1}}))}()}]);
//# sourceMappingURL=bundle.js.map