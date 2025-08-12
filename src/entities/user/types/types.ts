// 요청 데이터 타입 정의
export type UserCreateRequest = {
  userName: string;
  userTel: string;
  userPwd: string;
  userBirth: string;
};

// 응답 데이터 타입 정의
export type UserCreateResponse = {
  resultCode: string;
  resultMsg: string;
};
