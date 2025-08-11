import iconPass from "@/app/assets/img/icon-pass.svg";
import iconSeat from "@/app/assets/img/icon-seat.svg";
import iconCoupon from "@/app/assets/img/icon-coupon.svg";
import iconAlarm from "@/app/assets/img/icon-alarm.svg";
import iconMenu from "@/app/assets/img/icon-menu.svg";

const Footer = () => {
  return (
    <nav className="footer-nav">
      <div className="footer-nav__item active">
        <a href="./pass.html">
          <img src={iconPass} alt="이용권" />
          이용권
        </a>
      </div>
      <div className="footer-nav__item">
        <a href="./seat.html">
          <img src={iconSeat} alt="좌석" />
          좌석<span className="badge">18</span>
        </a>
      </div>
      <div className="footer-nav__item">
        <a href="./coupon.html">
          <img src={iconCoupon} alt="쿠폰함" />
          쿠폰함
        </a>
      </div>
      <div className="footer-nav__item">
        <a href="./alarm.html">
          <img src={iconAlarm} alt="알림" />
          알림
        </a>
      </div>
      <div className="footer-nav__item">
        <a href="./menu.html">
          <img src={iconMenu} alt="메뉴" />
          메뉴
        </a>
      </div>
    </nav>
  );
};

export default Footer;
