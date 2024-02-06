const MESSAGE = Object.freeze({
  REQUIRED_EMAIL: '이메일을 입력해 주세요.',
  INVALID_EMAIL_FORMAT: '올바른 이메일 주소가 아닙니다.',
  CHECK_EMAIL: '이메일을 확인해 주세요.',
  DUPLICATE_EMAIL: '이미 사용 중인 이메일입니다.',

  REQUIRED_PASSWORD: '비밀번호를 입력해 주세요.',
  INVALID_PW_FORMAT: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  CHECK_PASSWORD: '비밀번호를 확인해 주세요.',
  NOT_MATCH_PASSWORD: '비밀번호가 일치하지 않아요.',
});

const REGEX = Object.freeze({
  EMAIL_REGEX: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  PW_REGEX: /^(?=.*[a-zA-Z])(?=.*[0-9])\S{8,20}$/,
});

const ACTION = Object.freeze({
  EMAIL: 'EMAIL',
  PW: 'PW',
});

const TEST_AUTH = Object.freeze({
  EMAIL: 'test@codeit.com',
  PW: 'codeit101',
});

export { MESSAGE, REGEX, ACTION, TEST_AUTH };