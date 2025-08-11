import iconPass from "@/app/assets/img/icon-pass.svg";

const PassDetail = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px 62px 16px" }}>
        <div className="detail-list fade-in">
          <div className="detail-card selected">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">1일(독립룸 하루사용)</div>
              <div className="desc">9999개 남음</div>
              <div className="price">
                <del style={{ color: "#bbb" }}>24,000원</del> 21,600원
              </div>
            </div>
          </div>
          <div className="detail-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">1일(라운지가좋아하루)</div>
              <div className="desc">9998개 남음</div>
              <div className="price">
                <del style={{ color: "#bbb" }}>15,000원</del> 13,500원
              </div>
            </div>
          </div>
          <div className="detail-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">7일(독립룸 일주일)</div>
              <div className="desc">9998개 남음</div>
              <div className="price">
                <del style={{ color: "#bbb" }}>95,000원</del> 86,000원
              </div>
            </div>
          </div>
          <div className="detail-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">15일(독립룸 보름)</div>
              <div className="desc">9999개 남음</div>
              <div className="price">
                <del style={{ color: "#bbb" }}>170,000원</del> 153,000원
              </div>
            </div>
          </div>
          <div className="detail-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">30일(독립룸1개월)</div>
              <div className="desc">9995개 남음</div>
              <div className="price">
                <del style={{ color: "#bbb" }}>275,000원</del> 250,000원
              </div>
            </div>
          </div>
          <div className="detail-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">30일(라운지가 좋아)</div>
              <div className="desc">9996개 남음</div>
              <div className="price">
                <del style={{ color: "#bbb" }}>220,000원</del> 198,000원
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PassDetail;
