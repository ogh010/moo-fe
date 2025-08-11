const PassPay = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px" }}>
        <div className="pay-info fade-in">
          <div className="title">등촌역점 / 자유석 기간권</div>
          <div className="desc">2025.07.25 21:58 ~ 2025.07.26 21:58</div>
          <div className="date">자유석 기간권 / 1일 (독립룸 하루사용)</div>
          <div className="price">21,600원</div>
        </div>
        <div className="pay-coupon slide-up">
          <label htmlFor="coupon">쿠폰 할인</label>
          <select id="coupon">
            <option>사용가능한 쿠폰이 없습니다.</option>
          </select>
        </div>
        <div className="pay-method slide-up">
          <label>
            <input type="radio" name="pay" checked={true} /> 카드
          </label>
          <label>
            <input type="radio" name="pay" /> 카카오페이
          </label>
          <label>
            <input type="radio" name="pay" /> 애플페이
          </label>
        </div>
        <button className="pay-btn" disabled={true}>
          결제하기
        </button>
      </main>
    </div>
  );
};

export default PassPay;
