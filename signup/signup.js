import { EMAIL_REGEX, TEST_EMAIL } from "/js/account/constant.js";
import { eyeOpen, eyeClose } from "/js/account/passwordIconToggle.js";
import { emailTest, onInput } from "../js/account/util.js";

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");
const passwordConfirm = document.querySelector("#passwordConfirm");
const passwordConfirmError = document.querySelector(".passwordConfirmError");

const form = document.querySelector("#form");

onInput(email, emailError);
onInput(password, passwordError);
onInput(passwordConfirm, passwordConfirmError);

function OnFocusOutEmail(e) {
  if (emailTest(e.target, emailError)) {
    return;
  }

  if (e.target.value === TEST_EMAIL) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    e.target.classList.add("inputError");
    return;
  }
}

function OnFocusOutPassword(e) {
  const password = e.target.value;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (password.length < 8 || !passwordRegex.test(password)) {
    passwordError.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    e.target.classList.add("inputError");
    return;
  }
  passwordError.textContent = "";
  e.target.classList.remove("inputError");
}

function onSubmit(e) {
  e.preventDefault();
  if (
    emailError.classList.contains("inputError") ||
    password.classList.contains("inputError")
  ) {
    return;
  }

  if (passwordConfirm.value !== password.value) {
    passwordConfirmError.textContent = "비밀번호가 일치하지 않아요.";
    passwordConfirm.classList.add("inputError");
    return;
  }

  location.href = "/folder";
}

email.addEventListener("focusout", OnFocusOutEmail);
password.addEventListener("focusout", OnFocusOutPassword);
form.addEventListener("submit", onSubmit);
