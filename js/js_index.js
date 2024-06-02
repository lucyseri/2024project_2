"use strict";
//section1
const banner = document.querySelector('#sec1 .banner-img');
const bannerUlLi = document.querySelectorAll('#sec1 .banner_img_ul .banner_img_li');
const slideCountCurrent = document.querySelector('#sec1 .slide-count .current-num');
const slideCountTotal = document.querySelector('#sec1 .slide-count .total-num');
const arrowBtn = document.querySelector('#sec1 .slide-arrows');
const arrowBtnSpan = document.querySelectorAll('#sec1 .slide-arrows .arrow-btn');
const slideDotUl = document.querySelector('#sec1 ul.slide_dot_ul');
const slideDotUlLi = document.querySelectorAll('#sec1 .slide_dot_ul li');

slideCountTotal.innerText = bannerUlLi.length - 2;
function sec1AutoGoFn(num){
  const bannerGap = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
  const bannerGoto = (-bannerGap * num) + "px";
  banner.style.left = bannerGoto;
  banner.style.transition = "left 0.2s ease-in-out";
}
function sec1AutoDotFn(num){
  slideDotUlLi.forEach((el, idx)=>{
    let dotIdx = num - 1;
    if(num >= bannerUlLi.length -1){
      dotIdx = 0;
    }else if(num < 1){
      dotIdx = slideDotUlLi.length -1;
    }
    if(dotIdx == idx){
      el.classList.add('slide-on');
    }else{
      el.classList.remove('slide-on');
    }
  })
}

let i = 0;
function bannerSlide(){
  i++;
  const bannerGap = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
  const bannerGoto = (-bannerGap * i) + "px";
  if(i >= bannerUlLi.length - 1){
    banner.style.left = "-" + bannerUlLi[1].offsetLeft + "px";
    banner.style.transition = 0 + "ms";
    i = 0;
    setTimeout(bannerSlide,0);
  }else{
    banner.style.left = bannerGoto;
    banner.style.transition = 200 + "ms";
  }
  slideCountCurrent.innerText = i;
  sec1AutoDotFn(i);
}
let bannerIn = setInterval(bannerSlide, 2000);
(()=>{bannerSlide()})();

arrowBtn.addEventListener('mouseover', bannerArrowFn);
arrowBtn.addEventListener('mouseout', bannerArrowFn);
arrowBtn.addEventListener('click', bannerArrowFn);
function bannerArrowFn(e){
  arrowBtnSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'mouseover'){
        console.log(e.target)
        clearInterval(bannerIn);
      }else if(e.type == 'mouseout'){
        bannerIn = setInterval(bannerSlide, 2000);
      }else if(e.type == 'click'){
        if(idx == 0){
          i++;
          if(i>=bannerUlLi.length-1){
            banner.style.left = `-${bannerUlLi[1].offsetLeft}px`;
            banner.style.transition = 0 + "ms";
            i = 0;
            setTimeout(bannerSlide, 0);
          }else{
            sec1AutoGoFn(i);
          }
        }else if(idx == 1){
          i--;
          if(i<1){
            banner.style.left = `-${bannerUlLi[bannerUlLi.length-2].offsetLeft}px`;
            banner.style.transition = 0 + "ms";
            i = bannerUlLi.length-2;
          }else{
            sec1AutoGoFn(i);
          }
        }
        slideCountCurrent.innerText = i;
      }
    }
  })
}
slideDotUl.addEventListener('mouseover', bannerDotFn);
slideDotUl.addEventListener('mouseout', bannerDotFn);
slideDotUl.addEventListener('click', bannerDotFn);
function bannerDotFn(e){
  slideDotUlLi.forEach((el, idx)=>{
    if(e.type == 'mouseover'){
      if(e.target == el){
        clearInterval(bannerIn);
      }
    }else if(e.type == 'mouseout'){
      if(e.target == el){
        bannerIn = setInterval(bannerSlide, 2000);
      }
    }else if(e.type == 'click'){
      if(e.target == el){
        el.classList.add('slide-on');
        let idx2 = idx + 1;
        sec1AutoGoFn(idx2);
        i = idx2;
      }else{
        el.classList.remove('slide-on');
      }
    }
  })
}

//common - mouse scroll
let isDown = false;
let startX;
let newScrollLeft;
function mouseScrollFn(e){
  if(e.type == "mousedown"){
    e.preventDefault();
  isDown = true;
  startX = e.pageX - this.offsetLeft;
  newScrollLeft = this.scrollLeft;
  }else if(e.type == "mouseleave"){
    isDown = false;
  }else if(e.type == "mouseup"){
    isDown = false;
  }else if(e.type == "mousemove"){
    e.preventDefault();
    if(!isDown) return;
    const x = e.pageX - this.offsetLeft;
    const walk = x - startX;
    this.scrollLeft = newScrollLeft - walk;
    if(e.currentTarget == sec3Slider){
      scrollBarFn(sec3ScrollBar, this);
    }else if(e.currentTarget == sec5Slider){
      scrollBarFn(sec5ScrollBar, this);
    }
  }else if(e.type == "click"){
    const x = e.pageX - this.offsetLeft;
    const walk = x - startX;
    if(walk != 0){
      e.preventDefault();
      isDown = false;
    }else{
      e.defaultPrevented = false;
    }
  }
}
//section3
const sec3Hashtag = document.querySelector('.hashtag-list');
const sec3HashtagUl = document.querySelector('.hashtag-list ul');
const sec3HashtagLi = document.querySelectorAll('.hashtag-list li');
const sec3HashTagArrow = document.querySelector('#sec3 .hashtag-btn');
const sec3HashTagArrowSpan = document.querySelectorAll('#sec3 .hashtag-btn span');
const sec3HashtagGap = sec3HashtagLi[1].offsetLeft - sec3HashtagLi[0].offsetLeft;
const sec3Slider = document.querySelector('.sec3-list');
const sec3SliderLi = document.querySelectorAll('.sec3-list li');
const sec3SliderLiImg = document.querySelectorAll('.sec3-list li img');
const sec3SliderLiP = document.querySelectorAll('.sec3-list li p');
const sec3ScrollBar = document.querySelector('#sec3 .current-scroll');
const sec3ScrollArrow = document.querySelector('#sec3 .scroll-btn');
const sec3ScrollArrowSpan = document.querySelectorAll('#sec3 .scroll-btn span');
const sec3ScrollGap = sec3SliderLi[2].offsetLeft - sec3SliderLi[0].offsetLeft;
const mobileMore = document.querySelector('.mobile-more');

sec3HashtagUl.addEventListener('click', function(e){
  sec3HashtagLi.forEach((el, idx)=>{
    if(e.target == el){
      sec3Name[idx].name();
      sec3SliderLiImg.forEach((el2, idx2)=>{
        el2.setAttribute('src', `img/section3/sec3_${idx}_${idx2}.jpg`);
      })
      if(window.innerWidth <= 414){
        mobileMore.style.display = "flex";
        for(let i = 4; i<sec3SliderLi.length; i++){
          sec3SliderLi[i].classList.remove('mobile-list');
        }
      }
    }
  })
})
mobileMore.addEventListener('click', function(e){
  if(e.target == mobileMore.firstElementChild){
    mobileMore.style.display = "none";
    sec3SliderLi.forEach((el, idx)=>{
      el.classList.add('mobile-list');
    })
  }
})
function sec3ProductName(idx0, idx1, idx2, idx3, idx4, idx5){
  this.idx0 = idx0;
  this.idx1 = idx1;
  this.idx2 = idx2;
  this.idx3 = idx3;
  this.idx4 = idx4;
  this.idx5 = idx5;
  this.name = function(){
    sec3SliderLiImg[0].setAttribute('alt', idx0);
    sec3SliderLiImg[1].setAttribute('alt', idx1);
    sec3SliderLiImg[2].setAttribute('alt', idx2);
    sec3SliderLiImg[3].setAttribute('alt', idx3);
    sec3SliderLiImg[4].setAttribute('alt', idx4);
    sec3SliderLiImg[5].setAttribute('alt', idx5);
    sec3SliderLiP[0].innerText = idx0;
    sec3SliderLiP[1].innerText = idx1;
    sec3SliderLiP[2].innerText = idx2;
    sec3SliderLiP[3].innerText = idx3;
    sec3SliderLiP[4].innerText = idx4;
    sec3SliderLiP[5].innerText = idx5;
  }
}
var sec3Name = [
  new sec3ProductName("초끝 맞춤법+어휘+독해 2단계", "초끝 저절로 구구단", "초끝 스스로 시계+달력+계획표", "초끝 문장 학습+글쓰기 1단계", "초끝 맞춤법+어휘+독해 1단계", "초끝 문장 학습+글쓰기 2단계"),
  new sec3ProductName("괜찮아 어법", "백신 과학 중등 1-1", "기출정식 고1 영어", "메가스터디 중학 국어 독해 비문학 사회 개념", "엠베스트 민정범 개념엔 유형학습 중학수학 1-1", "메가스터디 N제 과학탐구영역 지구과학1 285제"),
  new sec3ProductName("큰별쌤 최태성의 스토리 한국사 사전", "초등 문해력 한 문장 정리의 힘 기본편 1권", "초등영문법 문장의 원리 Level1", "이서윤쌤의 초등한자 어휘 끝내기 1단계", "이서윤쌤의 초등한자어휘 일력", "초등 문해력 한 문장 정리의 힘 실전편 1권"),
  new sec3ProductName("수능 기출 올픽 영어 독해(2025 수능 대비)", "수능 기출 올픽 국어 문학(2025 수능 대비)", "수능 기출 올픽 수학1(2025 수능 대비)", "메가스터디 수능 수학 킥(KICK) 수학1", "메가스터디 수능 수학 킥(KICK) 수학2", "메가스터디 수능 수학 킥(KICK) 미적분"),
  new sec3ProductName("백신 과학 중등 1-1", "백신 과학 중등 물리학", "메가스터디 중학 국어 비문학 독해 연습 1권", "메가스터디 중학 국어 문학 필수개념 독해 연습 1권", "메가스터디 중학 국어 독해 비문학 과학 개념", "메가스터디 중학 영단어 기본"),
  new sec3ProductName("로스쿨에 가고 싶어졌습니다", "서울대 의대 1학년의 찐 합격 노트", "의대에 가고 싶어졌습니다", "공대에 가고 싶어졌습니다", "스스로 뒤집는 붕어빵", "한예종에 가고 싶어졌습니다"),
  new sec3ProductName("괜찮아 어법", "기출정식 고1 영어", "기출정식 고2 영어", "메가스터디 N제 영어영역 어법+어휘 222제", "메가스터디 N제 영어영역 고난도+3점 241제", "메가스터디 N제 영어영역 독해 332제")
]
sec3Hashtag.addEventListener('mousedown', mouseScrollFn);
sec3Hashtag.addEventListener('mouseleave', mouseScrollFn);
sec3Hashtag.addEventListener('mouseup', mouseScrollFn);
sec3Hashtag.addEventListener('mousemove', mouseScrollFn);
sec3Slider.addEventListener('mousedown', mouseScrollFn);
sec3Slider.addEventListener('mouseleave', mouseScrollFn);
sec3Slider.addEventListener('mouseup', mouseScrollFn);
sec3Slider.addEventListener('mousemove', mouseScrollFn);
sec3Slider.addEventListener('click', mouseScrollFn);

function ScrollNextBtnFn(a, b){
  let currentScroll = a.scrollLeft;
  a.scrollLeft = currentScroll + b;
};
function ScrollBeforeBtnFn(a, b){
  let currentScroll = a.scrollLeft;
  a.scrollLeft = currentScroll - b;
}

sec3HashTagArrow.addEventListener('click', function(e){
  sec3HashTagArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 1){
        ScrollNextBtnFn(sec3Hashtag, sec3HashtagGap);
      }else if(idx == 0){
        ScrollBeforeBtnFn(sec3Hashtag, sec3HashtagGap);
      }
    }
  })
})

sec3ScrollArrow.addEventListener('click', function(e){
  sec3ScrollArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 1){
        ScrollNextBtnFn(sec3Slider, sec3ScrollGap);
      }else if(idx == 0){
        ScrollBeforeBtnFn(sec3Slider, sec3ScrollGap);
      }
    }
  })
})

function scrollBarFn(a, b){
  a.style.width = ((b.scrollLeft + b.offsetWidth) / b.scrollWidth * 100) + "%";
}
scrollBarFn(sec3ScrollBar, sec3Slider);
sec3Slider.addEventListener('scroll', function(){
  scrollBarFn(sec3ScrollBar, sec3Slider);
});

//section5
const sec5Slider = document.querySelector('#sec5 .slider-frame');
const sec5SliderLabelUl = document.querySelector('#sec5 .title ul');
const sec5SliderLabelUlLi = document.querySelectorAll('#sec5 .title ul li');
const sec5SliderLi = document.querySelectorAll('#sec5 .slider-frame li');
const sec5SliderLiImg = document.querySelectorAll('#sec5 .slider-frame li img');
const sec5SliderLiP = document.querySelectorAll('#sec5 .slider-frame li p');
const sec5ScrollGap = sec5SliderLi[1].offsetLeft - sec5SliderLi[0].offsetLeft;
const sec5ScrollArrow = document.querySelector('#sec5 .arrows');
const sec5ScrollArrowSpan = document.querySelectorAll('#sec5 .arrows span');
const sec5ScrollBar = document.querySelector('#sec5 .current-scroll');
const media768 = window.matchMedia("(max-width: 768px)");

const mediaChange = function(e){
  if(e.matches){
    sec5Slider.scrollLeft = sec5SliderLi[0].offsetWidth / 2;
  }
}
media768.addListener((e)=>{
  if(e.matches){
    sec5Slider.scrollLeft = sec5SliderLi[0].offsetWidth / 2;
  }
})
mediaChange(media768);

sec5SliderLabelUl.addEventListener('click', function(e){
  sec5SliderLabelUlLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('sec5-on');
      sec5Name[idx].sec5name();
      sec5SliderLiImg.forEach((el2, idx2)=>{
        el2.setAttribute('src', `img/section5/sec5_${idx}_${idx2}.jpg`)
      })
    }else{
      el.classList.remove('sec5-on');
    }
  })
})

function sec5ProductName(idx0, idx1, idx2, idx3, idx4, idx5){
  this.idx0 = idx0;
  this.idx1 = idx1;
  this.idx2 = idx2;
  this.idx3 = idx3;
  this.idx4 = idx4;
  this.idx5 = idx5;
  this.sec5name = function(){
    sec5SliderLiImg[0].setAttribute('alt', idx0);
    sec5SliderLiImg[1].setAttribute('alt', idx1);
    sec5SliderLiImg[2].setAttribute('alt', idx2);
    sec5SliderLiImg[3].setAttribute('alt', idx3);
    sec5SliderLiImg[4].setAttribute('alt', idx4);
    sec5SliderLiImg[5].setAttribute('alt', idx5);

    sec5SliderLiP[0].innerText = idx0;
    sec5SliderLiP[1].innerText = idx1;
    sec5SliderLiP[2].innerText = idx2;
    sec5SliderLiP[3].innerText = idx3;
    sec5SliderLiP[4].innerText = idx4;
    sec5SliderLiP[5].innerText = idx5;
  }
}
var sec5Name = [
  new sec5ProductName("큰별쌤 최태성의 스토리 한국사 사전", "이서윤쌤의 초등한자어휘 일력", "초등영문법 문장의 원리 Level1", "1일1독해 우리 고전 50 2권 교과서 고전문학", "1일1독해 세상을 바꾼 인물 100 1권 문화, 예술", "용돈 잘 쓰는 법"),
  new sec5ProductName("완쏠 개념 중등수학 1-1", "백신 과학 중등 1-1", "메가스터디 중학 국어 비문학 독해 연습 1권", "메가스터디 중학 국어 문학 필수개념 독해 연습 1권", "메가스터디 중학 국어 독해 비문학", "백신 과학 중등 2-2"),
  new sec5ProductName("수능 기출 올픽 국어 문학", "수능 기출 올픽 영어 독해", "수능 기출 올픽 수학1", "메가스터디 N제 과학탐구영역 지구과학1 285제", "메가스터디 N제 수학1 3점 공략 243제", "메가스터디 N제 영어영역 독해 332제"),
  new sec5ProductName("초간단 집밥 다이어트 레시피", "하와이 대저택 100일 미라클", "서울대 의대 1학년의 찐 합격 노트", "의대에 가고 싶어졌습니다", "회사는 엑셀을 가르쳐주지 않아요", "미술관에 가고 싶어졌습니다")
];

sec5Slider.addEventListener('mousedown', mouseScrollFn);
sec5Slider.addEventListener('mouseleave', mouseScrollFn);
sec5Slider.addEventListener('mouseup', mouseScrollFn);
sec5Slider.addEventListener('mousemove', mouseScrollFn);
sec5Slider.addEventListener('click', mouseScrollFn);

sec5ScrollArrow.addEventListener('click', function(e){
  sec5ScrollArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 1){
        ScrollNextBtnFn(sec5Slider, sec5ScrollGap);
      }else if(idx == 0){
        ScrollBeforeBtnFn(sec5Slider, sec5ScrollGap);
      }
    }
  })
})

scrollBarFn(sec5ScrollBar, sec5Slider);
sec5Slider.addEventListener('scroll', function(){
  scrollBarFn(sec5ScrollBar, sec5Slider);
});

// section6
const moreBtn = document.querySelector('#sec6 .more-btn button');
const sec6Slide = document.querySelector('#sec6 .slider-con');
const sec6SlideUl = sec6Slide.querySelector('ul');
const sec6SlideUlLi = sec6SlideUl.querySelectorAll('li');
const sec6Arrows = document.querySelector('#sec6 .arrow-btn');
const sec6ArrowSpan = document.querySelectorAll('#sec6 .arrow-btn span');

let d = 0;
moreBtn.addEventListener('click', function(){
  if(d == 0){
    sec6SlideUlLi[2].style.display = "block";
    sec6SlideUlLi[3].style.display = "block";
    moreBtn.innerText = "접기"
    d++;
  }else if(d == 1){
    sec6SlideUlLi[2].style.display = "none";
    sec6SlideUlLi[3].style.display = "none";
    moreBtn.innerText = "더보기"
    d--;
  }
})

function sec6SliderFn(num){
  const gap = sec6SlideUlLi[1].offsetLeft - sec6SlideUlLi[0].offsetLeft;
  const goto = -gap * num + "px";
  sec6SlideUl.style.transform = `translateX(${goto})`;
}
let ef = 0;
sec6Arrows.addEventListener('click', function(e){
  sec6ArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 0){
        ef++;
        sec6SliderFn(ef)
        sec6ArrowSpan[1].style.opacity = "1";
        if(ef>=sec6SlideUlLi.length-2){
          ef=sec6SlideUlLi.length-3;
          el.style.opacity = "0.4"
        }
      }else if(idx == 1){
        ef--;
        sec6ArrowSpan[0].style.opacity = "1";
        if(ef<0){
          ef=0;
          el.style.opacity = "0.4"
        }
        sec6SliderFn(ef)
      }
    }
  })
})
