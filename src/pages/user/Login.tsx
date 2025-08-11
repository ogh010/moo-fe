import iconPass from "@/app/assets/img/icon-pass.svg";

const Login = () => {
  return (
    <div className="auth-wrap">
      <div className="auth-logo">
        <img src={iconPass} alt="로고" />
      </div>
      <div className="auth-title">로그인</div>
      <form className="auth-form" autoComplete="off">
        <input type="tel" placeholder="휴대폰 번호" required />
        <input type="password" placeholder="비밀번호" required />
        <button className="auth-btn" type="submit">
          로그인
        </button>
      </form>
      {/* <div class="social-login">
               <button class="social-btn kakao">
                 <img src="../assets/img/kakao.png" alt="카카오" />카카오로 로그인
               </button>
               <button class="social-btn google">
                 <img src="../assets/img/google.png" alt="구글" />Google로 로그인
               </button>
             </div> */}
      <div className="auth-bottom">
        계정이 없으신가요? <a href="./join.html">회원가입</a>
      </div>
    </div>
  );
};

export default Login;
