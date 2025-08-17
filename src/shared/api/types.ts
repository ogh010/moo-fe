// api 결과 코드 상수
export const API_RESULT_CODE = {
  SUCCESS: "0000", // 성공
  DUPLICATED_PHONE: "1001", // 휴대폰 번호 중복
  FAILURE: "9999", // 실패

  NO_USER: "9001", // 존재하지 않는 사용자
  NO_PASSWORD: "9002", // 일치하지 않는 비밀번호
  ERROR: "9009", // 에러
} as const;

// api 결과 코드 타입
export type ApiResultCode =
  (typeof API_RESULT_CODE)[keyof typeof API_RESULT_CODE];
// typeof : 타입 추출 연산자
// keyof : 객체의 키를 순회하는 연산자
// [keyof typeof API_RESULT_CODE] : API_RESULT_CODE 객체의 키를 순회하는 연산자
