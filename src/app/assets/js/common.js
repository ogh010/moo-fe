// common.js - 공통 스크립트

document.addEventListener("DOMContentLoaded", function () {
  // 하단 네비게이션 활성화 표시
  const navItems = document.querySelectorAll(".footer-nav__item");
  const path = location.pathname;
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link && path.includes(link.getAttribute("href"))) {
      item.classList.add("active");
    }
  });
});
