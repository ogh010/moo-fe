import iconAlarm from "@/app/assets/img/icon-alarm.svg";

const Alarm = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px 62px 16px" }}>
        <div className="alarm-list fade-in">
          <div className="alarm-card">
            <div className="icon">
              <img src={iconAlarm} width="28" alt="알림" />
            </div>
            <div className="info">
              <div className="title">[등촌역점] 입실</div>
              <div className="desc">오늘도 화이팅! 좋은 하루 되세요^^</div>
              <div className="date">2025-07-25 18:30:26</div>
            </div>
          </div>
          <div className="alarm-card">
            <div className="icon">
              <img src={iconAlarm} width="28" alt="알림" />
            </div>
            <div className="info">
              <div className="title">[등촌역점] 퇴실</div>
              <div className="desc">오늘도 정말 수고했어요^^</div>
              <div className="date">2025-07-25 00:18:03</div>
            </div>
          </div>
          <div className="alarm-card">
            <div className="icon">
              <img src={iconAlarm} width="28" alt="알림" />
            </div>
            <div className="info">
              <div className="title">[등촌역점] 입실</div>
              <div className="desc">오늘도 화이팅! 좋은 하루 되세요^^</div>
              <div className="date">2025-07-24 18:30:32</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Alarm;
