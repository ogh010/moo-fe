import iconSeat from "@/app/assets/img/icon-seat.svg";

const Select = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "16px" }}>
        <div className="legend fade-in">
          <span>
            <span className="dot dot-ava" />
            선택가능
          </span>
          <span>
            <span className="dot dot-unava" />
            선택불가
          </span>
          <span>
            <span className="dot dot-resv" />
            퇴실예정석
          </span>
          <span>
            <span className="dot dot-fix" />
            고정석
          </span>
        </div>
        <div className="seat-map slide-up">
          <div className="seat-box selected">
            <img src={iconSeat} width="28" alt="좌석" />
            <span className="seat-num">21</span>
          </div>
          <div className="seat-box">
            <img src={iconSeat} width="28" alt="좌석" />
            <span className="seat-num">22</span>
          </div>
          <div className="seat-box unavailable">
            <img src={iconSeat} width="28" alt="좌석" />
            <span className="seat-num">23</span>
          </div>
          <div className="seat-box">
            <img src={iconSeat} width="28" alt="좌석" />
            <span className="seat-num">24</span>
            <span className="badge">퇴실예정</span>
          </div>
          <div className="seat-box">
            <img src={iconSeat} width="28" alt="좌석" />
            <span className="seat-num">25</span>
          </div>
          <div className="seat-box" style={{ background: "#f3e5f5" }}>
            <img src={iconSeat} width="28" alt="좌석" />
            <span className="seat-num" style={{ color: "#8e24aa" }}>
              26
            </span>
            <span className="badge" style={{ background: "#8e24aa" }}>
              고정석
            </span>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#888",
            fontSize: 14,
            marginTop: 10,
          }}
        >
          자유석 18/34 | 고정석 0/3 | 예약룸 1/2
        </div>
      </main>
    </div>
  );
};

export default Select;
