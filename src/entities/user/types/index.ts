// public API - User types

// 회원가입 요청 타입
export type UserCreateRequest = {
  userName: string;
  userTel: string;
  userPwd: string;
  userBirth: string;
};

// 회원가입 응답 타입
export type UserCreateResponse = {
  resultCode: string;
  resultMsg: string;
};

// 로그인 요청 타입
export type UserLoginRequest = {
  userTel: string;
  userPwd: string;
  storeId: string;
};

// 로그인 응답 타입
export type UserLoginResponse = {
  resultCode: string;
  resultMsg: string;
  userId: string;
  token: string;
  redirectUrl: string;
  success: boolean;
};
