"use strict";
// section2 - filter
const filterSubmit = document.querySelector("#sec2 .btn-box input[type='submit']");
const filterMoreBtn = document.querySelector("#sec2 span.more-btn");
const filterBox = document.querySelector("#sec2 .fieldset-box");
//section3 - product info
const listTotal = document.querySelector('.list-total strong');
const productListLi = document.querySelectorAll('.product-list ul li');
const pagerUl = document.querySelector('#sec3 .pager-box ul');
const pagerUlLi = document.querySelectorAll('#sec3 .pager-box ul li');
const bigArrowLeft = document.querySelector('#sec3 .pager-box span.big-arrow.left');
const bigArrowRight = document.querySelector('#sec3 .pager-box span.big-arrow.right');
const smallArrowLeft = document.querySelector('#sec3 .pager-box span.small-arrow.left');
const smallArrowRight = document.querySelector('#sec3 .pager-box span.small-arrow.right');

// section2 - filter
let filterMoreTrigger = true;
filterMoreBtn.addEventListener('click', function(e){
  if(filterMoreTrigger){
    filterBox.classList.add('more-on');
    filterMoreBtn.innerText = "필터 닫기";
    filterMoreTrigger = false;
  }else{
    filterBox.classList.remove('more-on');
    filterMoreBtn.innerText = "필터 더보기";
    filterMoreTrigger = true;
  }
});
filterSubmit.addEventListener('click', function(e){
  e.preventDefault();
});
//section3 - pager
listTotal.innerText = productListLi.length;
pagerUl.addEventListener('click', function(e){
  pagerUlLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('page-on');
      productListLi.forEach((el2, idx2)=>{
        if(productListLi.length <= (idx+1)*8){
          if(idx2>=idx*8 && idx2<productListLi.length){
            el2.classList.remove('hidden-product');
          }else{
            el2.classList.add('hidden-product');
          }
        }else{
          if(idx2>=idx*8 && idx2<(idx+1)*8){
            el2.classList.remove('hidden-product');
          }else{
            el2.classList.add('hidden-product');
          }
        }
      });
    }else{
      el.classList.remove('page-on');
    }
  });
});
//section3 - arrow btn
let arrowTrigger = 0;
function nextPageFn(){
  arrowTrigger++;
  if(arrowTrigger>pagerUlLi.length-1){
    arrowTrigger = pagerUlLi.length-1;
    return
  };
  pagerUlLi.forEach((el, idx)=>{
    if(idx == arrowTrigger){
      el.classList.add('page-on');
      productListLi.forEach((el2, idx2)=>{
        if(productListLi.length <= (idx+1)*8){
          if(idx2>=idx*8 && idx2<productListLi.length){
            el2.classList.remove('hidden-product');
          }else{
            el2.classList.add('hidden-product');
          }
        }else{
          if(idx2>=idx*8 && idx2<(idx+1)*8){
            el2.classList.remove('hidden-product');
          }else{
            el2.classList.add('hidden-product');
          }
        }
      });
    }else{
      el.classList.remove('page-on');
    }
  });
};
function prePageFn(){
  arrowTrigger--;
  if(arrowTrigger<0){
    arrowTrigger = 0;
    return
  };
  pagerUlLi.forEach((el, idx)=>{
    if(idx == arrowTrigger){
      el.classList.add('page-on');
      productListLi.forEach((el2, idx2)=>{
        if(productListLi.length <= (idx+1)*8){
          if(idx2>=idx*8 && idx2<productListLi.length){
            el2.classList.remove('hidden-product');
          }else{
            el2.classList.add('hidden-product');
          }
        }else{
          if(idx2>=idx*8 && idx2<(idx+1)*8){
            el2.classList.remove('hidden-product');
          }else{
            el2.classList.add('hidden-product');
          }
        }
      });
    }else{
      el.classList.remove('page-on');
    }
  });
};
bigArrowRight.addEventListener('click', nextPageFn);
smallArrowRight.addEventListener('click', nextPageFn);
bigArrowLeft.addEventListener('click', prePageFn);
smallArrowLeft.addEventListener('click', prePageFn);
