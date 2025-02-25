//form
const pwCheck = document.querySelector('.double-check');
const pw1 = document.querySelector('#member-pw');
const pw2 = document.querySelector('#member-pw2');
const emailDomainSelect = document.querySelector('#user-email-domain');
const emailDomainInput = document.querySelector('#user-email-self');
const submitBtn = document.querySelector('.join-btn');

pw2.addEventListener('keyup', function () {
  if (pw1.value === pw2.value) {
    pwCheck.innerText = "비밀번호가 일치합니다";
    pwCheck.style.color = "var(--main-blueColor)";
  } else {
    pwCheck.innerText = "비밀번호가 일치하지 않습니다";
    pwCheck.style.color = "#F00";
  }
});
emailDomainSelect.addEventListener('change', function(){
  if(this.value == 'self'){
    emailDomainInput.value = '';
    emailDomainInput.readOnly = false;
  }else{
    emailDomainInput.value = this.value;
    emailDomainInput.readOnly = true;
  }
});
submitBtn.addEventListener('click', function (e) {
  if (pw1.value !== pw2.value) {
    pwCheck.innerText = "비밀번호가 일치하지 않습니다";
    pw2.focuse();
    return false;
  }
});