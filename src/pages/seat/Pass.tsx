import ticketEmpty from "@/app/assets/img/ticket_empty.svg";
import { useEffect } from "react";

const Pass = () => {
  useEffect(() => {
    // 좌석 선택 애니메이션 예시
    document.querySelectorAll(".seat-box").forEach((box) => {
      box.addEventListener("click", function () {
        if (box.classList.contains("unavailable")) return;
        document
          .querySelectorAll(".seat-box")
          .forEach((b) => b.classList.remove("selected"));
        box.classList.add("selected");
      });
    });
  }, []);

  return (
    <div className="page-wrap">
      {/* 헤더 */}
      <main style={{ flex: "1" }}>
        {/* 이용권 없을 때 */}
        <section className="pass-card" id="pass-empty">
          <div className="status">운영중</div>
          <span style={{ fontSize: 13, color: "#888", display: "block" }}>
            24시간
          </span>
          <div style={{ margin: "32px 0 24px" }}>
            <img
              src={ticketEmpty}
              alt="이용권 없음"
              style={{ width: 80, height: 80, opacity: "0.7" }}
            />
          </div>
          <div className="desc">
            이용권 구매는 상단의
            <br />
            <b>이용권 구매</b> 에서도 가능합니다
          </div>
          <button className="buy-btn">이용권 구매</button>
        </section>
        {/* 이용권 있을 때 (예시) */}
        <section
          className="pass-card"
          id="pass-active"
          style={{ display: "none" }}
        >
          <div
            className="status"
            style={{ background: "#e0f2f1", color: "#00796b" }}
          >
            입실
          </div>
          <span className="seat">자유석 21</span>
          <div className="title">기간권 31일(야간토일공휴일)</div>
          <div className="period">2025.07.18 16:59 ~ 2025.08.18 16:59</div>
          <div className="qr">
            <img src="../assets/img/qr_sample.png" alt="QR코드" />
          </div>
          <div className="remain">23일 19:02:59</div>
          <div className="info">출입시 반드시 QR코드를 스캔하세요.</div>
          <div className="btns">
            <button>시간 연장</button>
            <button>좌석 이동</button>
            <button>퇴실</button>
          </div>
        </section>
      </main>
      {/* 푸터 */}
    </div>
  );
};

export default Pass;
