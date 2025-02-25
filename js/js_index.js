"use strict";
//section1
const sec1Con = document.querySelector('#sec1 .sec-con');
const banner = document.querySelector('#sec1 .banner-img');
const bannerUlLi = document.querySelectorAll('#sec1 .banner_img_ul .banner_img_li');
const slideCountCurrent = document.querySelector('#sec1 .slide-count .current-num');
const slideCountTotal = document.querySelector('#sec1 .slide-count .total-num');
const arrowBtn = document.querySelector('#sec1 .slide-arrows');
const arrowBtnSpan = document.querySelectorAll('#sec1 .slide-arrows .arrow-btn');
const slideDotUl = document.querySelector('#sec1 ul.slide_dot_ul');
const slideDotUlLi = document.querySelectorAll('#sec1 .slide_dot_ul li');
//section3
const sec3Hashtag = document.querySelector('.hashtag-list');
const sec3HashtagUl = document.querySelector('.hashtag-list ul');
const sec3HashtagLi = document.querySelectorAll('.hashtag-list li');
const sec3HashTagArrow = document.querySelector('#sec3 .hashtag-btn');
const sec3HashTagArrowSpan = document.querySelectorAll('#sec3 .hashtag-btn span');
const sec3Slider = document.querySelector('.sec3-list');
const sec3SliderLi = document.querySelectorAll('.sec3-list li');
const sec3SliderLiImg = document.querySelectorAll('.sec3-list li img');
const sec3SliderLiP = document.querySelectorAll('.sec3-list li p');
const sec3ScrollBar = document.querySelector('#sec3 .current-scroll');
const sec3ScrollArrow = document.querySelector('#sec3 .scroll-btn');
const sec3ScrollArrowSpan = document.querySelectorAll('#sec3 .scroll-btn span');
const sec3ScrollGap = sec3SliderLi[2].offsetLeft - sec3SliderLi[0].offsetLeft;
const mobileMore = document.querySelector('.mobile-more');
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
// section6
const moreBtn = document.querySelector('#sec6 .more-btn button');
const sec6Slide = document.querySelector('#sec6 .slider-con');
const sec6SlideUl = sec6Slide.querySelector('ul');
const sec6SlideUlLi = sec6SlideUl.querySelectorAll('li');
const sec6Arrows = document.querySelector('#sec6 .arrow-btn');
const sec6ArrowSpan = document.querySelectorAll('#sec6 .arrow-btn span');
// section7
const eventBox = document.querySelector('#sec7 .events-box');
//reload responsibly
let windowWidth = window.innerWidth;
window.addEventListener('resize', function(){
  const newWindowWidth = this.innerWidth;
  if(windowWidth < 1440 && newWindowWidth >= 1440){
    this.location.reload();
  }
  if((windowWidth < 1024 && newWindowWidth >= 1024) || (windowWidth > 1024 && newWindowWidth <=1024)){
    this.location.reload();
  }
  if((windowWidth < 768 && newWindowWidth >= 768) || (windowWidth > 768 && newWindowWidth <=768)){
    this.location.reload();
  }
  if((windowWidth < 414 && newWindowWidth >= 414) || (windowWidth > 414 && newWindowWidth <=414)){
    this.location.reload();
  }
  sec1Con.style.height = bannerUlLi[0].offsetHeight + "px";
});
//common - mouse scroll slider
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
  }else if(e.type == "click"){
    const x = e.pageX - this.offsetLeft;
    const walk = x - startX;
    if(walk != 0){
      e.preventDefault();
      isDown = false;
    }else{
      e.defaultPrevented = false;
    };
  };
};
//common - mouse scroll slider arrow btn Fn
function ScrollNextBtnFn(a, b){
  let currentScroll = a.scrollLeft;
  a.scrollLeft = currentScroll + b;
};
function ScrollBeforeBtnFn(a, b){
  let currentScroll = a.scrollLeft;
  a.scrollLeft = currentScroll - b;
};
function scrollBarFn(a, b){
  a.style.width = ((b.scrollLeft + b.offsetWidth) / b.scrollWidth * 100) + "%";
};
//sec1 - setting: sec-con height & totl slide count
sec1Con.style.height = bannerUlLi[0].offsetHeight + "px";
slideCountTotal.innerText = bannerUlLi.length - 2;
//sec1 - slider Fn
function sec1AutoGoFn(num){
  const bannerGap = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
  const bannerGoto = (-bannerGap * num) + "px";
  banner.style.left = bannerGoto;
  banner.style.transition = "left 0.2s ease-in-out";
};
//sec1 - slider pager Fn
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
    };
  });
};
//sec1 - slider timer Fn
let i = 0;
function bannerSlide(){
  i++;
  const bannerGap = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
  const bannerGoto = (-bannerGap * i) + "px";
  if(i >= bannerUlLi.length - 1){
    banner.style.left = "-" + bannerUlLi[0].offsetLeft + "px";
    banner.style.transition = 0 + "ms";
    i = 0;
    setTimeout(bannerSlide,0);
  }else if(i<=0){
    banner.style.left = -1 * bannerGap * (bannerUlLi.length - 2) + "px";
    banner.style.transition = 0 + "ms";
  }else{
    banner.style.left = bannerGoto;
    banner.style.transition = 200 + "ms";
  }
  slideCountCurrent.innerText = i;
  sec1AutoDotFn(i);
}
let bannerIn = setInterval(bannerSlide, 2000);
(()=>{bannerSlide()})();
//sec1 - banner arrow btn
arrowBtn.addEventListener('mouseover', bannerArrowFn);
arrowBtn.addEventListener('mouseout', bannerArrowFn);
arrowBtn.addEventListener('click', bannerArrowFn);
function bannerArrowFn(e){
  const bannerGap = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
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
            banner.style.left = `-${bannerUlLi[0].offsetLeft}px`;
            banner.style.transition = 0 + "ms";
            i = 0;
            setTimeout(bannerSlide, 0);
          }else{
            sec1AutoGoFn(i);
          };
        }else if(idx == 1){
          i--;
          if(i<1){
            i = bannerUlLi.length-2;
            banner.style.left = `-${bannerUlLi[bannerUlLi.length-1].offsetLeft}px`;
            banner.style.transition = 0 + "ms";
            setTimeout(function(){
              banner.style.left = -1 * bannerGap * i + "px";
              banner.style.transition = 200 + "ms";
              sec1AutoDotFn(i - 1);
            }, 0);
          }else{
            sec1AutoGoFn(i);
          };
        };
        slideCountCurrent.innerText = i;
      };
    };
  });
};
//sec1 - slide pager btn
slideDotUl.addEventListener('mouseover', bannerDotFn);
slideDotUl.addEventListener('mouseout', bannerDotFn);
function bannerDotFn(e){
  slideDotUlLi.forEach((el, idx)=>{
    if(e.type == 'mouseover'){
      if(e.target == el){
        clearInterval(bannerIn);
      };
    }else if(e.type == 'mouseout'){
      if(e.target == el){
        bannerIn = setInterval(bannerSlide, 2000);
      };
    };
  });
};
slideDotUl.addEventListener('click', function(e){
  const bannerGap = bannerUlLi[1].offsetLeft - bannerUlLi[0].offsetLeft;
  slideDotUlLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('slide-on');
      if(i>=bannerUlLi.length-2){
        if(idx == 0){
          banner.style.left = `-${bannerUlLi[0].offsetLeft}px`;
          banner.style.transition = 0 + "ms";
          i = 0;
          setTimeout(bannerSlide, 0);
        }else{
          i=idx+1;
          sec1AutoGoFn(i);
        };
      }else if(i<=1){
        if(idx == slideDotUlLi.length - 1){
          banner.style.left = `-${bannerUlLi[bannerUlLi.length-1].offsetLeft}px`;
          banner.style.transition = 0 + "ms";
          i = bannerUlLi.length-2;
          setTimeout(function(){
            banner.style.left = -1 * bannerGap * i + "px";
            banner.style.transition = 200 + "ms";
          }, 0);
        }else{
          i=idx+1;
          sec1AutoGoFn(i);
        };
      }else{
        i=idx+1;
        sec1AutoGoFn(i);
      };
    }else{
      el.classList.remove('slide-on');
    };
  });
});
//sec3 - hashtag slider
sec3Hashtag.addEventListener('mousedown', mouseScrollFn);
sec3Hashtag.addEventListener('mouseleave', mouseScrollFn);
sec3Hashtag.addEventListener('mouseup', mouseScrollFn);
sec3Hashtag.addEventListener('mousemove', mouseScrollFn);
const sec3Products = [
  {img: 'img/section3/sec3_0_0.jpg', name: "초끝 맞춤법+어휘+독해 2단계", btnNum: '0'},
  {img: 'img/section3/sec3_1_0.jpg', name: "괜찮아 어법", btnNum: '1'},
  {img: 'img/section3/sec3_2_0.jpg', name: "큰별쌤 최태성의 스토리 한국사 사전", btnNum: '2'},
  {img: 'img/section3/sec3_3_0.jpg', name: "수능 기출 올픽 영어 독해(2025 수능 대비)", btnNum: '3'},
  {img: 'img/section3/sec3_4_0.jpg', name: "백신 과학 중등 1-1", btnNum: '4'},
  {img: 'img/section3/sec3_5_0.jpg', name: "로스쿨에 가고 싶어졌습니다", btnNum: '5'},
  {img: 'img/section3/sec3_6_0.jpg', name: "괜찮아 어법", btnNum: '6'},
  {img: 'img/section3/sec3_0_1.jpg', name: "초끝 저절로 구구단", btnNum: '0'},
  {img: 'img/section3/sec3_1_1.jpg', name: "백신 과학 중등 1-1", btnNum: '1'},
  {img: 'img/section3/sec3_2_1.jpg', name: "초등 문해력 한 문장 정리의 힘 기본편 1권", btnNum: '2'},
  {img: 'img/section3/sec3_3_1.jpg', name: "수능 기출 올픽 국어 문학(2025 수능 대비)", btnNum: '3'},
  {img: 'img/section3/sec3_4_1.jpg', name: "백신 과학 중등 물리학", btnNum: '4'},
  {img: 'img/section3/sec3_5_1.jpg', name: "서울대 의대 1학년의 찐 합격 노트", btnNum: '5'},
  {img: 'img/section3/sec3_6_1.jpg', name: "기출정식 고1 영어", btnNum: '6'},
  {img: 'img/section3/sec3_0_2.jpg', name: "초끝 스스로 시계+달력+계획표", btnNum: '0'},
  {img: 'img/section3/sec3_1_2.jpg', name: "기출정식 고1 영어", btnNum: '1'},
  {img: 'img/section3/sec3_2_2.jpg', name: "초등영문법 문장의 원리 Level1", btnNum: '2'},
  {img: 'img/section3/sec3_3_2.jpg', name: "수능 기출 올픽 수학1(2025 수능 대비)", btnNum: '3'},
  {img: 'img/section3/sec3_4_2.jpg', name: "메가스터디 중학 국어 비문학 독해 연습 1권", btnNum: '4'},
  {img: 'img/section3/sec3_5_2.jpg', name: "의대에 가고 싶어졌습니다", btnNum: '5'},
  {img: 'img/section3/sec3_6_2.jpg', name: "기출정식 고2 영어", btnNum: '6'},
  {img: 'img/section3/sec3_0_3.jpg', name: "초끝 문장 학습+글쓰기 1단계", btnNum: '0'},
  {img: 'img/section3/sec3_1_3.jpg', name: "메가스터디 중학 국어 독해 비문학 사회 개념", btnNum: '1'},
  {img: 'img/section3/sec3_2_3.jpg', name: "이서윤쌤의 초등한자 어휘 끝내기 1단계", btnNum: '2'},
  {img: 'img/section3/sec3_3_3.jpg', name: "메가스터디 수능 수학 킥(KICK) 수학1", btnNum: '3'},
  {img: 'img/section3/sec3_4_3.jpg', name: "메가스터디 중학 국어 문학 필수개념 독해 연습 1권", btnNum: '4'},
  {img: 'img/section3/sec3_5_3.jpg', name: "공대에 가고 싶어졌습니다", btnNum: '5'},
  {img: 'img/section3/sec3_6_3.jpg', name: "메가스터디 N제 영어영역 어법+어휘 222제", btnNum: '6'},
  {img: 'img/section3/sec3_0_4.jpg', name: "초끝 맞춤법+어휘+독해 1단계", btnNum: '0'},
  {img: 'img/section3/sec3_1_4.jpg', name: "엠베스트 민정범 개념엔 유형학습 중학수학 1-1", btnNum: '1'},
  {img: 'img/section3/sec3_2_4.jpg', name: "이서윤쌤의 초등한자어휘 일력", btnNum: '2'},
  {img: 'img/section3/sec3_3_4.jpg', name: "메가스터디 수능 수학 킥(KICK) 수학2", btnNum: '3'},
  {img: 'img/section3/sec3_4_4.jpg', name: "메가스터디 중학 국어 독해 비문학 과학 개념", btnNum: '4'},
  {img: 'img/section3/sec3_5_4.jpg', name: "스스로 뒤집는 붕어빵", btnNum: '5'},
  {img: 'img/section3/sec3_6_4.jpg', name: "메가스터디 N제 영어영역 고난도+3점 241제", btnNum: '6'},
  {img: 'img/section3/sec3_0_5.jpg', name: "초끝 문장 학습+글쓰기 2단계", btnNum: '0'},
  {img: 'img/section3/sec3_1_5.jpg', name: "메가스터디 N제 과학탐구영역 지구과학1 285제", btnNum: '1'},
  {img: 'img/section3/sec3_2_4.jpg', name: "초등 문해력 한 문장 정리의 힘 실전편 1권", btnNum: '2'},
  {img: 'img/section3/sec3_3_5.jpg', name: "메가스터디 수능 수학 킥(KICK) 미적분", btnNum: '3'},
  {img: 'img/section3/sec3_4_5.jpg', name: "메가스터디 중학 영단어 기본", btnNum: '4'},
  {img: 'img/section3/sec3_5_5.jpg', name: "한예종에 가고 싶어졌습니다", btnNum: '5'},
  {img: 'img/section3/sec3_6_5.jpg', name: "메가스터디 N제 영어영역 독해 332제", btnNum: '6'}
];
let imgSrc = [];
let imgAlt = [];
sec3HashtagUl.addEventListener('click', function(e){
  sec3HashtagLi.forEach((el, idx)=>{
    if(e.target == el){
       imgSrc.splice(0);
       imgAlt.splice(0);
      for(let i=0; i<sec3Products.length;i++){
        if(sec3Products[i].btnNum == idx){
          imgSrc.push(sec3Products[i].img);
          imgAlt.push(sec3Products[i].name);
        }
      }
      for(let i=0; i<sec3SliderLiImg.length; i++){
        sec3SliderLiImg[i].setAttribute("src", imgSrc[i]);
        sec3SliderLiImg[i].setAttribute("alt", imgAlt[i]);
        sec3SliderLiP[i].innerText = imgAlt[i];
      }
      if(window.innerWidth <= 414){
        mobileMore.style.display = "flex";
        for(let i = 4; i<sec3SliderLi.length; i++){
          sec3SliderLi[i].classList.remove('mobile-list');
        };
      };
    };
  });
});
sec3HashTagArrow.addEventListener('click', function(e){
  const sec3HashtagGap = sec3HashtagLi[1].offsetLeft - sec3HashtagLi[0].offsetLeft;
  sec3HashTagArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 1){
        ScrollNextBtnFn(sec3Hashtag, sec3HashtagGap);
      }else if(idx == 0){
        ScrollBeforeBtnFn(sec3Hashtag, sec3HashtagGap);
      };
    };
  });
});
//sec3 - product slider
scrollBarFn(sec3ScrollBar, sec3Slider);
sec3Slider.addEventListener('mousedown', mouseScrollFn);
sec3Slider.addEventListener('mouseleave', mouseScrollFn);
sec3Slider.addEventListener('mouseup', mouseScrollFn);
sec3Slider.addEventListener('click', mouseScrollFn);
sec3Slider.addEventListener('mousemove', mouseScrollFn);
sec3Slider.addEventListener('mousemove', function(){
  scrollBarFn(sec3ScrollBar, this)
});
sec3Slider.addEventListener('scroll', function(){
  scrollBarFn(sec3ScrollBar, sec3Slider);
});
sec3ScrollArrow.addEventListener('click', function(e){
  sec3ScrollArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 1){
        ScrollNextBtnFn(sec3Slider, sec3ScrollGap);
      }else if(idx == 0){
        ScrollBeforeBtnFn(sec3Slider, sec3ScrollGap);
      };
    };
  });
});
//sec3 - mobile more btn
mobileMore.addEventListener('click', function(e){
  if(e.target == mobileMore.firstElementChild){
    mobileMore.style.display = "none";
    sec3SliderLi.forEach((el, idx)=>{
      el.classList.add('mobile-list');
    });
  };
});
//sec5 - title category
const sec5Products = [
  {img: 'img/section5/sec5_0_0.jpg', name: "큰별쌤 최태성의 스토리 한국사 사전", num: '0'},
  {img: 'img/section5/sec5_0_1.jpg', name: "이서윤쌤의 초등한자어휘 일력", num: '0'},
  {img: 'img/section5/sec5_0_2.jpg', name: "초등영문법 문장의 원리 Level1", num: '0'},
  {img: 'img/section5/sec5_0_3.jpg', name: "1일1독해 우리 고전 50 2권 교과서 고전문학", num: '0'},
  {img: 'img/section5/sec5_0_4.jpg', name: "1일1독해 세상을 바꾼 인물 100 1권 문화, 예술", num: '0'},
  {img: 'img/section5/sec5_0_5.jpg', name: "용돈 잘 쓰는 법", num: '0'},
  {img: 'img/section5/sec5_1_0.jpg', name: "완쏠 개념 중등수학 1-1", num: '1'},
  {img: 'img/section5/sec5_1_1.jpg', name: "백신 과학 중등 1-1", num: '1'},
  {img: 'img/section5/sec5_1_2.jpg', name: "메가스터디 중학 국어 비문학 독해 연습 1권", num: '1'},
  {img: 'img/section5/sec5_1_3.jpg', name: "메가스터디 중학 국어 문학 필수개념 독해 연습 1권", num: '1'},
  {img: 'img/section5/sec5_1_4.jpg', name: "메가스터디 중학 국어 독해 비문학", num: '1'},
  {img: 'img/section5/sec5_1_5.jpg', name: "백신 과학 중등 2-2", num: '1'},
  {img: 'img/section5/sec5_2_0.jpg', name: "수능 기출 올픽 국어 문학", num: '2'},
  {img: 'img/section5/sec5_2_1.jpg', name: "수능 기출 올픽 영어 독해", num: '2'},
  {img: 'img/section5/sec5_2_2.jpg', name: "수능 기출 올픽 수학1", num: '2'},
  {img: 'img/section5/sec5_2_3.jpg', name: "메가스터디 N제 과학탐구영역 지구과학1 285제", num: '2'},
  {img: 'img/section5/sec5_2_4.jpg', name: "메가스터디 N제 수학1 3점 공략 243제", num: '2'},
  {img: 'img/section5/sec5_2_5.jpg', name: "메가스터디 N제 영어영역 독해 332제", num: '2'},
  {img: 'img/section5/sec5_3_0.jpg', name: "초간단 집밥 다이어트 레시피", num: '3'},
  {img: 'img/section5/sec5_3_1.jpg', name: "하와이 대저택 100일 미라클", num: '3'},
  {img: 'img/section5/sec5_3_2.jpg', name: "서울대 의대 1학년의 찐 합격 노트", num: '3'},
  {img: 'img/section5/sec5_3_3.jpg', name: "의대에 가고 싶어졌습니다", num: '3'},
  {img: 'img/section5/sec5_3_4.jpg', name: "회사는 엑셀을 가르쳐주지 않아요", num: '3'},
  {img: 'img/section5/sec5_3_5.jpg', name: "미술관에 가고 싶어졌습니다", num: '3'},
];
let sec5ProductSrc = [];
let sec5ProductName = [];
sec5SliderLabelUl.addEventListener('click', function(e){
  sec5ProductSrc.splice(0);
  sec5ProductName.splice(0);
  sec5SliderLabelUlLi.forEach((el, idx)=>{
    if(e.target == el){
      el.classList.add('sec5-on');
      for(let i = 0; i<sec5Products.length; i++){
        if(sec5Products[i].num == idx){
          sec5ProductSrc.push(sec5Products[i].img);
          sec5ProductName.push(sec5Products[i].name);
        }
      }
      for(let i = 0; i<sec5SliderLabelUlLi.length;i++){
        sec5SliderLiImg[i].setAttribute('src', sec5ProductSrc[i]);
        sec5SliderLiImg[i].setAttribute('alt', sec5ProductName[i]);
        sec5SliderLiP[i].innerText = sec5ProductName[i];
      }
    }else{
      el.classList.remove('sec5-on');
    };
  });
});
//sec5 - slider
sec5Slider.addEventListener('mousedown', mouseScrollFn);
sec5Slider.addEventListener('mouseleave', mouseScrollFn);
sec5Slider.addEventListener('mouseup', mouseScrollFn);
sec5Slider.addEventListener('click', mouseScrollFn);
sec5Slider.addEventListener('mousemove', mouseScrollFn);
sec5Slider.addEventListener('mousemove', function(){
  scrollBarFn(sec5ScrollBar, this)
});
sec5ScrollArrow.addEventListener('click', function(e){
  sec5ScrollArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 1){
        ScrollNextBtnFn(sec5Slider, sec5ScrollGap);
      }else if(idx == 0){
        ScrollBeforeBtnFn(sec5Slider, sec5ScrollGap);
      };
    };
  });
});
scrollBarFn(sec5ScrollBar, sec5Slider);
sec5Slider.addEventListener('scroll', function(){
  scrollBarFn(sec5ScrollBar, sec5Slider);
});
//sec5 - mobile scroll setting
const media768 = window.matchMedia("(max-width: 768px)").matches;
const mediaChange = function(){
  if(media768){
    sec5Slider.scrollLeft = sec5SliderLi[0].offsetWidth / 2;
  };
};
mediaChange();
//sec6 - slider arrow btn
function sec6SliderFn(num){
  const gap = sec6SlideUlLi[1].offsetLeft - sec6SlideUlLi[0].offsetLeft;
  const goto = -gap * num + "px";
  sec6SlideUl.style.transform = `translateX(${goto})`;
}
let b = 0;
sec6Arrows.addEventListener('click', function(e){
  sec6ArrowSpan.forEach((el, idx)=>{
    if(e.target == el){
      if(idx == 0){
        el.nextElementSibling.classList.remove('inactive');
        if(b >= sec6SlideUlLi.length - 1) return
        b++;
        sec6SliderFn(b);
        if(b>=sec6SlideUlLi.length - 1) el.classList.add('inactive');
      }else if(idx == 1){
        el.previousElementSibling.classList.remove('inactive');
        if(b <= 0) return
        b--;
        sec6SliderFn(b);
        if(b <= 0) el.classList.add('inactive');
      };
    };
  });
});
//sec6 - mobile more btn
let moreTrigger = true;
moreBtn.addEventListener('click', function(){
  if(moreTrigger){
    sec6SlideUlLi[sec6SlideUlLi.length-2].style.display = "block";
    sec6SlideUlLi[sec6SlideUlLi.length-1].style.display = "block";
    moreBtn.innerText = "접기"
    moreTrigger = false;
  }else if(!moreTrigger){
    sec6SlideUlLi[sec6SlideUlLi.length-2].style.display = "none";
    sec6SlideUlLi[sec6SlideUlLi.length-1].style.display = "none";
    moreBtn.innerText = "더보기"
    moreTrigger = true;
  };
});
//sec7 - mouse scroll slider
const media414 = window.matchMedia("(max-width: 414px)").matches;

const tabletEventSlider = function(){
  if(media768 && !media414){
    eventBox.addEventListener('mousedown', mouseScrollFn);
    eventBox.addEventListener('mouseleave', mouseScrollFn);
    eventBox.addEventListener('mouseup', mouseScrollFn);
    eventBox.addEventListener('click', mouseScrollFn);
    eventBox.addEventListener('mousemove', mouseScrollFn);
  };
};
tabletEventSlider();