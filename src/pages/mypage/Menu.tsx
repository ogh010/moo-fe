import iconMenu from "@/app/assets/img/icon-menu.svg";
import iconPass from "@/app/assets/img/icon-pass.svg";
import iconCoupon from "@/app/assets/img/icon-coupon.svg";
import iconSeat from "@/app/assets/img/icon-seat.svg";
import iconAlarm from "@/app/assets/img/icon-alarm.svg";

const Menu = () => {
  return (
    <div className="page-wrap">
      <main style={{ flex: "1", padding: "0 16px" }}>
        <div className="profile-card fade-in">
          <div className="icon">
            <img src={iconMenu} width="38" alt="메뉴" />
          </div>
          <div className="info">
            <div className="name">
              오가희 <span className="badge">여성</span>
            </div>
            <div className="phone">01092245158</div>
            <div className="birth">1998-06-07</div>
          </div>
        </div>
        <div className="menu-list slide-up">
          <div className="menu-item">
            <img src={iconPass} alt="이용권" />
            보유 이용권
          </div>
          <div className="menu-item">
            <img src={iconCoupon} alt="쿠폰" />
            쿠폰 1
          </div>
          <div className="menu-item">
            <img src={iconSeat} alt="좌석" />
            My 카드
          </div>
          <div className="menu-item">
            <img src={iconAlarm} alt="알림" />
            구매내역
          </div>
          <div className="menu-item">
            <img src={iconMenu} alt="카톡문의" />
            카톡문의
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
