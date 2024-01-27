import {
  emailFormatCheck,
  passwordFormatCheck,
  togglePasswordEye,
  errorMessageVisibleAndTextChange,
  errorMessageHidden,
  isPasswordAndEmailMatch,
} from "./utils.js";

const emailInput = document.querySelector(".sign-input");
const passwordInput = document.getElementById("password");
const form = document.querySelector(".sign-form");
const togglePasswordButton = document.getElementById("toggle-password");
const emailErrorMessage = document.getElementById("emailErrorBox");
const passwordErrorMessage = document.getElementById("passwordErrorBox");

const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

function emailCheck(e) {
  if (emailInput.value === "") {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일을 입력해주세요."
    );
  } else if (!emailFormatCheck(emailInput.value)) {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일 형식이 올바르지 않습니다."
    );
  } else {
    errorMessageHidden(emailErrorMessage);
  }
}

function passwordCheck(e) {
  if (passwordInput.value === "") {
    errorMessageVisibleAndTextChange(
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
  } else {
    errorMessageHidden(passwordErrorMessage);
  }
}

function onSubmitIdAndPassword(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (isPasswordAndEmailMatch(email, password)) {
    window.location.href = "success.html";
    return;
  } else {
    errorMessageVisibleAndTextChange(
      emailErrorMessage,
      "이메일을 확인해 주세요."
    );
    errorMessageVisibleAndTextChange(
      passwordErrorMessage,
      "비밀번호를 확인해 주세요."
    );
  }
}

emailInput.addEventListener("mouseout", emailCheck);
passwordInput.addEventListener("mouseout", passwordCheck);
form.addEventListener("submit", onSubmitIdAndPassword);
togglePasswordButton.addEventListener("click", () =>
  togglePasswordEye(passwordInput, togglePasswordButton)
);
