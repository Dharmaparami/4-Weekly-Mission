import emailValidate from '../utils/emailValidate.js';
import passwordValidate from '../utils/passwordValidate.js';

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#passwordCheck');

//회원가입 실행 시 에러 메시지 호출 또는 페이지 이동
function signupCheck() {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const passwordCheckValue = passwordCheckInput.value;
  const checkEmail = emailValidate(emailInput.value);
  const checkPassword = passwordValidate(passwordInput.value);

  if (checkEmail && checkPassword) {
    window.location.href = './folder';
  }

  if (!checkEmail) {
    emailInput.classList.add('invalid');
    emailError.innerHTML = '이메일을 확인해 주세요.';
  }

  if (!checkPassword) {
    passwordInput.classList.add('invalid');
    passwordError.innerHTML = '비밀번호를 확인해 주세요.';
  }
}

document.querySelector('.middle').addEventListener('submit', function (e) {
  e.preventDefault();
  signupCheck();
});

//회원가입 버튼에 이벤트 리스너 등록
const signupButton = document.querySelector('#signupButton');
signupButton.addEventListener('click', signupCheck);

export default signupCheck;
