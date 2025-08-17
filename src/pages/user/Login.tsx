import iconPass from "@/app/assets/img/icon-pass.svg";
import { useState, useEffect } from "react";
import { UserLoginRequest } from "@/entities/user/types";
import { useUserLogin } from "@/features/user/model/useUserLogin";
import ApiLoader from "@/shared/ui/ApiLoader";
import { API_RESULT_CODE } from "@/shared/api/types";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // 로그인 훅
  const { loginUser } = useUserLogin();
  const [formData, setFormData] = useState<UserLoginRequest>({
    userTel: "",
    userPwd: "",
    storeId: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    console.log("click");

    try {
      const res = await loginUser({
        userTel: formData.userTel,
        userPwd: formData.userPwd,
        storeId: "1",
      });

      console.log("res", res);

      const { resultCode, resultMsg, redirectUrl, token } = res;

      switch (resultCode) {
        case API_RESULT_CODE.SUCCESS:
          alert(resultMsg || "로그인 성공");
          localStorage.setItem("accessToken", token);
          window.location.replace(redirectUrl);
          // // replace : 뒤로가기 방지
          break;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/seat/pass", { replace: true });
    }
  }, []);

  return (
    <>
      <ApiLoader />
      <div className="auth-wrap">
        <div className="auth-logo">
          <img src={iconPass} alt="로고" />
        </div>
        <div className="auth-title">로그인</div>
        <form className="auth-form" autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="휴대폰 번호"
            name="userTel"
            value={formData.userTel}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            name="userPwd"
            value={formData.userPwd}
            onChange={handleInputChange}
            required
          />
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
    </>
  );
};

export default Login;
