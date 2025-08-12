// 응답 데이터 타입 정의
// <T> : 제네릭 타입
// 제네릭 타입이란 타입을 파라미터로 받아서 사용하는 타입
// 제네릭 타입을 사용하면 타입을 파라미터로 받아서 사용할 수 있음
export type ApiResponse<T> = {
  data: T;
  resultCode: string;
  resultMsg: string;
};
