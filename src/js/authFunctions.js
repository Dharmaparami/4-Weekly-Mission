import {REGEX_EMAIL, REGEX_PASSWORD, SRC_IMG_CLOSE_EYE, SRC_IMG_OPEN_EYE, TEST_USER_EMAIL,} from "./constant.js";

// 유효성 검증 관련 함수
export const isFilledInput = (target) => {
  return !(target.value === "");
};

export const isValidEmailForm = (target) => {
  return REGEX_EMAIL.test(target.value);
};

export const isUniqueEmail = (target) => {
  return target.value !== TEST_USER_EMAIL;
};

export const isValidPasswordForm = (target) => {
  return REGEX_PASSWORD.test(target.value);
};

export const isMatchWithPassword = (target, inputPassword) => {
  return target.value === inputPassword.value;
};

// 기타 함수
export const toggleViewPassword = (target) => {
  const targetInput = target.parentElement.previousElementSibling;

  if (targetInput.getAttribute("type") === "password") {
    targetInput.setAttribute("type", "text");
    target.setAttribute("src", SRC_IMG_OPEN_EYE);
  } else {
    targetInput.setAttribute("type", "password");
    target.setAttribute("src", SRC_IMG_CLOSE_EYE);
  }
};