const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('button.login');

const testEmail = 'test@codeit.com';
const testPw = 'codeit101';

// 인풋 입력 에러 시
function inputError(e, message) {
    e.target.classList.add('input-error');
    
    const span = document.createElement('span');
    span.classList.add('input-error-text');
    span.textContent = message;
    e.target.after(span);
}

// 로그인 실패 시 메세지
function loginError(element, message) {
    element.classList.add('input-error');
    
    const span = document.createElement('span');
    span.classList.add('input-error-text');
    span.textContent = message;
    element.after(span);

    if (element.nextElementSibling.nextElementSibling.tagName === 'SPAN') {
        element.nextElementSibling.nextElementSibling.remove();
    }
}

// 이메일 인풋 검사
function emailChecker(e) {
    if (!emailInput.value) {
        const enterEmail = "이메일을 입력해 주세요."
        inputError(e, enterEmail);
    } else if (emailInput.validity.typeMismatch) {
        const notAnEmail = "올바른 이메일 주소가 아닙니다."
        inputError(e, notAnEmail);
    }
}

// 비밀번호 인풋 검사
function passwordChecker(e) {
    if (!passwordInput.value) {
        const enterPassword = "비밀번호를 입력해 주세요."
        inputError(e, enterPassword);
    } 
}

// 에러 표시 숨기기
function removeError(e) {
    if (e.target.nextElementSibling.classList.contains('input-error-text')) {
        e.target.nextElementSibling.remove();
        e.target.classList.remove('input-error');
    }
}

// 로그인 검사
function signInChecker(e) {
        if (emailInput.value === testEmail && passwordInput.value === testPw) {
            location.replace('/folder');
        } else {
            const checkYourEmail = '이메일을 확인해 주세요.';
            const checkYourPassword = '비밀번호를 확인해 주세요.';

            loginError(emailInput, checkYourEmail);
            loginError(passwordInput, checkYourPassword);
        }
}

emailInput.addEventListener('focusout', emailChecker);
emailInput.addEventListener('focusin', removeError);
passwordInput.addEventListener('focusout', passwordChecker);
passwordInput.addEventListener('focusin', removeError);

loginBtn.addEventListener('click', signInChecker);


