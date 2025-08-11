import iconCoupon from "@/app/assets/img/icon-coupon.svg";

const Coupon = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px 62px 16px" }}>
        <div className="coupon-list fade-in">
          <div className="coupon-card">
            <div className="icon">
              <img src={iconCoupon} width="36" alt="쿠폰" />
            </div>
            <div className="info">
              <div className="title">
                25,000원 할인 <span className="badge">사용가능</span>
              </div>
              <div className="date">2025.07.18 ~ 2025.08.19 (25일 남음)</div>
              <div className="desc">정기권 연장 쿠폰</div>
            </div>
          </div>
          <div className="coupon-card used">
            <div className="icon">
              <img src={iconCoupon} width="36" alt="쿠폰" />
            </div>
            <div className="info">
              <div className="title">
                100% 할인 <span className="badge">기간만료</span>
              </div>
              <div className="date">2025.07.12 ~ 2025.07.20</div>
              <div className="desc">시원한곳에서 오늘 2시간 무료사용</div>
            </div>
          </div>
          <div className="coupon-card used">
            <div className="icon">
              <img src={iconCoupon} width="36" alt="쿠폰" />
            </div>
            <div className="info">
              <div className="title">
                30% 할인 <span className="badge">사용완료</span>
              </div>
              <div className="date">2025.07.13 ~ 2025.07.18</div>
              <div className="desc">당일권 30% 재택탈출구 여기어때요~</div>
            </div>
          </div>
        </div>
        <div className="coupon-notice slide-up">
          <b>쿠폰 유의 사항</b>
          <br />
          1. 쿠폰마다 사용 조건이 상이하니 반드시 쿠폰별 '사용가능조건'을
          확인하세요.
          <br />
          2. 쿠폰은 최대 2개까지 중복 사용 가능합니다.
          <br />
          3. 환불할 경우, 사용한 쿠폰은 복구되지 않습니다.
          <br />
          4. '선착순' 쿠폰은 조기 마감될 경우, 쿠폰이 만료 처리될 수 있습니다.
        </div>
      </main>
    </div>
  );
};

export default Coupon;
