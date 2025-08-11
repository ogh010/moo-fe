import iconPass from "@/app/assets/img/icon-pass.svg";

const PassSelect = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px 62px 16px" }}>
        <div className="pass-list fade-in">
          <div className="pass-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">
                당일권
                <span style={{ fontSize: 13, color: "#1976d2" }}>
                  (9998개 남음)
                </span>
              </div>
              <div className="desc">
                오늘 하루만 시간별로 이용 (1,2,4,8시간 등)
              </div>
              <div className="remain">1일권</div>
            </div>
          </div>
          <div className="pass-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">
                시간권
                <span style={{ fontSize: 13, color: "#1976d2" }}>
                  (209894개 남음)
                </span>
              </div>
              <div className="desc">
                충전시간에서 이용한 시간만큼 차감 (50, 100시간 등)
              </div>
              <div className="remain">+10시간권</div>
            </div>
          </div>
          <div className="pass-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">
                기간권
                <span style={{ fontSize: 13, color: "#1976d2" }}>
                  (229940개 남음)
                </span>
              </div>
              <div className="desc">
                1일~1년까지 기간별 이용권 (1,7,30,365일 등)
              </div>
              <div className="remain">31일권</div>
            </div>
          </div>
          <div className="pass-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">1인 독립형 기간권</div>
              <div className="desc">
                일정 기간동안 무제한 이용 (15,30,45,60일 등)
              </div>
              <div className="remain">독립형 30일권</div>
            </div>
          </div>
          <div className="pass-card">
            <div className="icon">
              <img src={iconPass} width="36" alt="이용권" />
            </div>
            <div className="info">
              <div className="title">예약룸 당일권/사전예약</div>
              <div className="desc">
                원하는 미팅룸과 시간을 미리 예약 (30분 이후부터 예약가능)
              </div>
              <div className="remain">예약권</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PassSelect;
