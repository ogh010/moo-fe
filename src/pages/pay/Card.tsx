const Card = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px 82px 16px" }}>
        <div className="pay-box fade-in" style={{ margin: "18px 0 18px" }}>
          <div className="title">자유석/기간권/01092245158/1일/구입</div>
          <div className="desc">별도 제공기간 없음</div>
          <div className="price">21,600원</div>
        </div>
        <div className="card-list slide-up">
          <div className="card-item selected">KB Pay(국민)</div>
          <div className="card-item">신한(SOL페이)</div>
          <div className="card-item">삼성</div>
          <div className="card-item">현대</div>
          <div className="card-item">롯데</div>
          <div className="card-item">BC</div>
        </div>
        <div className="agree-list slide-up">
          <div className="agree-item">
            <input type="checkbox" /> 이용약관 전체동의
          </div>
          <div className="agree-item">
            <input type="checkbox" /> 전자금융거래 이용약관 동의
          </div>
          <div className="agree-item">
            <input type="checkbox" /> 개인정보 수집 및 이용에 대한 동의
          </div>
          <div className="agree-item">
            <input type="checkbox" /> 개인정보 제 3자 제공약관 동의
          </div>
        </div>
        <button className="pay-btn" disabled={true}>
          모두 동의 후 진행
        </button>
      </main>
    </div>
  );
};

export default Card;
