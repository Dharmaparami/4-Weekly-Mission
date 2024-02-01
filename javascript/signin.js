const form = document.querySelector('#sign-box')
const emailInput = document.querySelector('#signin-email')
const passwordInput = document.querySelector('#signin-password')
const errorEmail = document.querySelector('#errorEmail')
const errorPassword = document.querySelector('#errorPassword')
const passwordCover = document.querySelector('#eyecon-password')
const cover = {isPasswordCovered: false}

import { isEmailValid, isInputEmpty, showError, clearError } from './sign-error.js'
import { togglePasswordByEyecon as togglePassword } from './toggle-password.js'
import { errorMsg } from './constants.js'

//////////////// 함수 정의 ////////////////////

/**이메일 확인 함수
 * 이메일 형식과 빈 input 확인 후 error 메세지 출력
 */
const checkEmail = () => {
    const email = emailInput.value.trim()
    // 이메일 미입력 에러
    if (isInputEmpty(email)) {
        showError(emailInput, errorEmail, errorMsg.emptyEmail)
        return
    }
    // 이메일 형식 확인
    if (!isEmailValid(email)) {
        showError(emailInput, errorEmail, errorMsg.invalidEmail)
        return
    }
}

/**
 * 비번 확인 함수
 * 빈 input 시 error 메세지 출력
 */
const checkPassword = () => {
    const password = passwordInput.value.trim()
    if (isInputEmpty(password)) {
        showError(passwordInput, errorPassword, errorMsg.emptyPassword)
    }
}
/**
 * 이메일 가입 여부 확인 함수
 * codeit에 가입한 이메일, 비번 참조
 * @returns 불린값
 */
const isEmailConfirmed = () => {
    const codeit = { email: 'test@codeit.com', password: 'codeit101' }
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()
    return email === codeit.email && password === codeit.password
}

/**
 *지정된 이메일 확인 후 /folder로 이동 or 에러 메세지
 * @param {*} event 해당 함수를 발생하는 이벤트
 * @returns 불린값
 */
const validateEmail = (event) => {
    if (isEmailConfirmed()) {
        event.preventDefault()
        window.location.href = '../html/folder.html'
        return
    }
    showError(emailInput, errorEmail, errorMsg.checkEmail)
    showError(passwordInput, errorPassword, errorMsg.checkPassword)
    event.preventDefault()
}

/////////핸들러 함수///////

const handleEmailFocusout = () => {
    clearError(emailInput, errorEmail)
    checkEmail()
}

const handlePasswordFocusout = () => {
    clearError(passwordInput, errorPassword)
    checkPassword()
}

const handlePasswordClick = () => {
    togglePassword(passwordInput, cover.isPasswordCovered, passwordCover)
    cover.isPasswordCovered = !cover.isPasswordCovered
}

//////////////// 함수 사용////////////////////

// 이메일 이벤트 리스너 부여
emailInput.addEventListener('focusout', handleEmailFocusout)

// 비번 이벤트 리스너 부여
passwordInput.addEventListener('focusout', handlePasswordFocusout)

// 로그인 버튼 입력 시 이메일 비번 확인 후 이동
form.addEventListener('submit', validateEmail)
// 비번 가리기 버튼 리스너 부여
passwordCover.addEventListener('click', handlePasswordClick)
