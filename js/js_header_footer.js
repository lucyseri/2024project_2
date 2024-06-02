"use strict";
//header - menu btn & lnb 
const topHeaderMenu = document.querySelector('.top-header .menu-icon');
const topHeaderMenuBar = document.querySelectorAll('.top-header .menu-icon .menu-bar');
const navMenuIcon = document.querySelector('#nav .menu-icon');
const navMenuIconBar = document.querySelectorAll('#nav .menu-icon .menu-bar');
const slideNav = document.querySelector('.slide-nav');
//header - tablet menu
let a = 0;
navMenuIcon.addEventListener('click', function(e){
  e.stopPropagation();
  a++;
  if(a<=1){
    navMenuIconBar[0].style.transform = "rotate(45deg) translate(6px, 8px)";
    navMenuIconBar[1].classList.add('middlebar_off');
    navMenuIconBar[2].style.transform = "rotate(-45deg) translate(6px, -8px)";
    slideNav.style.display = "flex";
  }else if(a>1){
    navMenuIconBar[0].style.transform = "rotate(0deg) translateY(0)";
    navMenuIconBar[1].classList.remove('middlebar_off');
    navMenuIconBar[2].style.transform = "rotate(0deg) translateY(0)";
    a=0;
    slideNav.style.display = "none";
  }
});

//header - web menu
let b = 0;
topHeaderMenu.addEventListener('click', function(e){
  e.stopPropagation();
  b++;
  if(b<=1){
    topHeaderMenuBar[0].style.transform = "rotate(45deg) translate(6px, 10px)";
    topHeaderMenuBar[1].classList.add('middlebar_off');
    topHeaderMenuBar[2].style.transform = "rotate(-45deg) translate(6px, -10px)";
    slideNav.style.display = "flex";
  }else if(b>1){
    topHeaderMenuBar[0].style.transform = "rotate(0deg) translateY(0)";
    topHeaderMenuBar[1].classList.remove('middlebar_off');
    topHeaderMenuBar[2].style.transform = "rotate(0deg) translateY(0)";
    b=0;
    slideNav.style.display = "none";
  }
});

// footer - family site slide down btn
const familySiteButton = document.querySelector('.family-site button');
const familySiteSlide = document.querySelector('.family-site ul.slide-down');

let c = 0;
familySiteButton.addEventListener('click', function(){
  if(c==0){
    c=1;
    familySiteSlide.classList.add('family-site-on');
  }else if(c==1){
    familySiteSlide.classList.remove('family-site-on');
    c=0;
  }
})
