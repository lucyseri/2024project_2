"use strict";
// filter - more btn
const filterMoreUl = document.querySelector('.filter-more-btn');
const filterMoreUlLi = document.querySelectorAll('.filter-more-btn li');
const filterDepth1Li = document.querySelectorAll('li.filter_depth1_li');

filterMoreUl.addEventListener('click', function(e){
  filterMoreUlLi.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 0){
        el.classList.add("search-condition-off");
        filterDepth1Li[4].classList.remove("search-condition-off");
        filterMoreUlLi[1].classList.remove("search-condition-off");
      }else if(idx == 1){
        el.classList.add("search-condition-off");
        filterDepth1Li[4].classList.add("search-condition-off");
        filterMoreUlLi[0].classList.remove("search-condition-off");
      }
    }
  })
})

//product info
const listTotal = document.querySelector('.list-total strong');
const productListLi = document.querySelectorAll('.product-list ul li');
const listName = document.querySelectorAll('.product-txt p');
const listSubject = document.querySelectorAll('.badges .subject');
const listGrade = document.querySelectorAll('.badges .grade');
const listThum = document.querySelectorAll('.product-thum img');

listTotal.innerText = productListLi.length;
const productName = [
  "초등영문법 문장의 원리 Level2", "초끝 문장 학습+글쓰기 2단계", "초끝 문장 학습+글쓰기 1단계", "초등영문법 문장의 원리 Level3",
  "초등영문법 문장의 원리 Level4", "이서윤쌤의 초등 한자 어휘 끝내기 3단계", "초끝 스스로 시계+달력+계획표", "초끝 저절로 구구단"
]
const productSubject = [
  "영어", "국어", "국어", "영어", 
  "영어", "국어", "수학", "수학"
]
const productGrade = [
  '초1, 초2, 초3, 초4', "초1, 초2", "초1, 초2", "초3, 초4, 초5, 초6", 
  "초3, 초4, 초5, 초6", "초4, 초5", "초1, 초2", "초1, 초2"
]
for(let i = 0; i<listName.length; i++){
  listName[i].innerText = productName[i];
  listSubject[i].innerText = productSubject[i];
  listGrade[i].innerText = productGrade[i]
}
listThum.forEach((el, idx)=>{
  el.setAttribute('src', `img/sub1/sub1_${idx}.jpg`);
  el.setAttribute('alt', productName[idx]);
})