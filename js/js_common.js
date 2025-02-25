"use strict";
//header - menu btn & lnb 
const topHeaderMenu = document.querySelector('.top-header .menu-icon');
const topHeaderMenuBar = document.querySelectorAll('.top-header .menu-icon .menu-bar');
const navMenuIcon = document.querySelector('#nav .menu-icon');
const navMenuIconBar = document.querySelectorAll('#nav .menu-icon .menu-bar');
const lnb = document.querySelector('.lnb');
// footer - family site slide down btn
const familySiteButton = document.querySelector('.family-site button');
const familySiteSlide = document.querySelector('.family-site ul.slide-down');
//header - tablet menu
let tabletTriger = true;
navMenuIcon.addEventListener('click', function(e){
  e.stopPropagation();
  if(tabletTriger){
    navMenuIconBar[0].style.transform = "rotate(45deg) translate(6px, 10px)";
    navMenuIconBar[1].classList.add('middlebar_off');
    navMenuIconBar[2].style.transform = "rotate(-45deg) translate(6px, -10px)";
    tabletTriger = false;
    lnb.style.display = "flex";
  }else if(!tabletTriger){
    navMenuIconBar[0].style.transform = "rotate(0deg) translateY(0)";
    navMenuIconBar[1].classList.remove('middlebar_off');
    navMenuIconBar[2].style.transform = "rotate(0deg) translateY(0)";
    tabletTriger = true;
    lnb.style.display = "none";
  }
});
//header - web menu
let webTriger = true;
topHeaderMenu.addEventListener('click', function(e){
  e.stopPropagation();
  if(webTriger){
    topHeaderMenuBar[0].style.transform = "rotate(45deg) translate(6px, 10px)";
    topHeaderMenuBar[1].classList.add('middlebar_off');
    topHeaderMenuBar[2].style.transform = "rotate(-45deg) translate(6px, -10px)";
    lnb.style.display = "flex";
    webTriger = false;
  }else if(!webTriger){
    topHeaderMenuBar[0].style.transform = "rotate(0deg) translateY(0)";
    topHeaderMenuBar[1].classList.remove('middlebar_off');
    topHeaderMenuBar[2].style.transform = "rotate(0deg) translateY(0)";
    webTriger = true;
    lnb.style.display = "none";
  }
});
// footer - family site slide down btn
let selectTrigger = true;
familySiteButton.addEventListener('click', function(){
  if(selectTrigger){
    selectTrigger = false;
    familySiteSlide.classList.add('family-site-on');
  }else{
    familySiteSlide.classList.remove('family-site-on');
    selectTrigger = true;
  }
});
