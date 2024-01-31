export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//이메일 유효성 검사
export function emailValidChk(email) {
  return emailRegex.test(email);
}

export function getNewMessageElement(message) {
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageElement.classList.add("empty-message");
  return messageElement;
}

//눈 모양 아이콘 이벤트
export const toggleEye = (input) => {
  const eyeOff = "/images/eye-off.svg";
  const eyeOn = "/images/eye-on.svg";

  if (input.type === "password") {
    input.type = "text";
    input.nextElementSibling.src = eyeOn;
  } else {
    input.type = "password";
    input.nextElementSibling.src = eyeOff;
  }
};