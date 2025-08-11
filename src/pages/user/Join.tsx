import { useState } from "react";
import iconPass from "@/app/assets/img/icon-pass.svg";

const Join = () => {
  // 비밀번호 state
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false);

  // 토글함수
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck((prev) => !prev);
  };

  return (
    <div className="auth-wrap" style={{ margin: "auto" }}>
      <div className="auth-logo">
        <img src={iconPass} alt="로고" />
      </div>
      <div className="auth-title">회원가입</div>
      <div className="auth-step">STEP 1/1 : 기본정보 입력</div>
      <form className="auth-form" autoComplete="off">
        <input type="text" placeholder="이름 (실명 입력)" required />
        <div className="guide">실명을 입력해 주세요.</div>
        <input type="tel" placeholder="휴대폰 번호 (숫자만)" required />
        <div className="guide">- 없이 숫자만 입력</div>
        <div className="row">
          <div className="pw-toggle" style={{ flex: "1" }}>
            <input
              className="pw-input"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 (8자 이상)"
              required
              id="pw1"
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
              required
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
        <div className="guide">영문, 숫자, 특수문자 포함 8자 이상</div>
        <input type="date" placeholder="생년월일" required />
        <div className="terms">
          <label>
            <input type="checkbox" required style={{ width: "inherit" }} />
            <a href="#">이용약관</a> 전체동의
          </label>
        </div>
        <button className="auth-btn" type="submit">
          가입하기
        </button>
        <div className="error" style={{ display: "none" }}>
          비밀번호가 일치하지 않습니다.
        </div>
      </form>
      <div className="auth-bottom">
        이미 계정이 있으신가요? <a href="./login.html">로그인</a>
      </div>
    </div>
  );
};

export default Join;
