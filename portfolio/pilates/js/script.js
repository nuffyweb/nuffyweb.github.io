var header=document.querySelector(".header__wrapper"),mainNavBtn=document.querySelector(".main-nav__btn"),modal=document.querySelector(".modal"),modalShowBtn1=document.querySelector(".price-list__btn--1"),modalShowBtn2=document.querySelector(".price-list__btn--2"),modalShowBtn3=document.querySelector(".price-list__btn--3"),modalClose=document.querySelector(".modal__close"),modalSubmit=document.querySelector(".modal__submit");mainNavBtn.addEventListener("click",function(e){e.preventDefault(),header.classList.contains("header__wrapper-menu")?(header.classList.remove("header__wrapper-menu"),mainNavBtn.classList.remove("burger--open")):(header.classList.add("header__wrapper-menu"),mainNavBtn.classList.add("burger--open"))}),modalShowBtn1.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal--open")}),modalShowBtn2.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal--open")}),modalShowBtn3.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal--open")}),modalClose.addEventListener("click",function(e){e.preventDefault(),modal.classList.contains("modal--open")&&modal.classList.remove("modal--open")}),modalSubmit.addEventListener("click",function(e){e.preventDefault(),modal.classList.contains("modal--open")&&modal.classList.remove("modal--open")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("modal--open")&&modal.classList.remove("modal--open")});