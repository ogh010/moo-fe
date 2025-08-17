import { useState } from "react";
import iconPass from "@/app/assets/img/icon-pass.svg";
import { useUserCreate } from "@/features/user/model";
import { UserCreateRequest } from "@/entities/user/types";
import { API_RESULT_CODE } from "@/shared/api/types";

const Join = () => {
  // 비밀번호 state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);
  // 비밀번호 확인 state
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  // 토글함수
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck((prev) => !prev);
  };

  // 회원가입 훅
  const { createUser } = useUserCreate();

  // 폼 데이터 state
  const [formData, setFormData] = useState<UserCreateRequest>({
    userName: "",
    userTel: "",
    userPwd: "",
    userBirth: "",
  });

  // 폼 데이터 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // 입력 요소의 이름과 값 추출

    // 폼 데이터 업데이트
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 비밀번호 확인 변경 핸들러
  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
  };

  // 회원가입 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 비밀번호 확인 일치 여부 확인
    if (formData.userPwd !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return; // 비밀번호가 일치하지 않으면 회원가입 중단
    }

    // 모든 필드 입력 여부 확인
    if (
      !formData.userName ||
      !formData.userTel ||
      !formData.userPwd ||
      !formData.userBirth
    ) {
      alert("모든 필드를 입력하세요.");
      return; // 모든 필드를 입력하지 않으면 회원가입 중단
    }

    try {
      let userBirth = formData.userBirth; // 생년월일 복사
      userBirth = userBirth.split("-").join(""); // 하이픈 제거

      // 회원가입 요청
      const res = await createUser({
        userName: formData.userName,
        userTel: formData.userTel,
        userPwd: formData.userPwd,
        userBirth: userBirth,
      });

      console.log("res", res);

      // ✅ 응답 구조에 맞게 수정
      const { resultCode, resultMsg } = res;

      // resultCode 기반 성공 처리
      switch (resultCode) {
        case API_RESULT_CODE.SUCCESS:
          alert(resultMsg || "회원가입이 완료되었습니다.");
          // 로그인 페이지로 이동
          window.location.href = "/user/login";
          break;
        case API_RESULT_CODE.DUPLICATED_PHONE:
          alert(resultMsg || "이미 사용중인 휴대폰 번호입니다.");
          break;
        default:
          alert(resultMsg || "회원가입에 실패했습니다.");
          break;
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <div className="auth-wrap" style={{ margin: "auto" }}>
        <div className="auth-logo">
          <img src={iconPass} alt="로고" />
        </div>
        <div className="auth-title">회원가입</div>
        <div className="auth-step">STEP 1/1 : 기본정보 입력</div>
        <form className="auth-form" autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="이름 (실명 입력)"
            value={formData.userName}
            onChange={handleInputChange}
            name="userName"
          />
          <div className="guide">실명을 입력해 주세요.</div>
          <input
            type="tel"
            placeholder="휴대폰 번호 (숫자만)"
            name="userTel"
            onChange={handleInputChange}
            value={formData.userTel}
          />
          <div className="guide">- 없이 숫자만 입력</div>
          <div className="row">
            <div className="pw-toggle" style={{ flex: "1" }}>
              <input
                className="pw-input"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호 (8자 이상)"
                id="pw1"
                name="userPwd"
                onChange={handleInputChange}
                value={formData.userPwd}
              />
              <button
                type="button"
                className="pw-toggle-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="pw-toggle" style={{ flex: "1" }}>
              <input
                className="pw-input"
                type={showPasswordCheck ? "text" : "password"}
                placeholder="비밀번호 확인"
                onChange={handlePasswordCheckChange}
                id="pw2"
              />
              <button
                type="button"
                className="pw-toggle-btn"
                onClick={togglePasswordCheckVisibility}
              >
                {showPasswordCheck ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          {formData.userPwd != passwordCheck && (
            <div className="error" style={{ display: "block" }}>
              비밀번호가 일치하지 않습니다.
            </div>
          )}
          <div className="guide">영문, 숫자, 특수문자 포함 8자 이상</div>
          <input
            type="date"
            placeholder="생년월일"
            name="userBirth"
            value={formData.userBirth}
            onChange={handleInputChange}
          />
          <div className="terms">
            <label>
              <input type="checkbox" style={{ width: "inherit" }} />
              <a href="#">이용약관</a> 전체동의
            </label>
          </div>
          <button className="auth-btn" type="submit">
            가입하기
          </button>
        </form>
        <div className="auth-bottom">
          이미 계정이 있으신가요? <a href="./login.html">로그인</a>
        </div>
      </div>
    </>
  );
};

export default Join;
