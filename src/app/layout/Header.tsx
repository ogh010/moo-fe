const Header = () => {
  return (
    <header className="header">
      <div>5158님의 이용권</div>
      <div
        style={{
          fontSize: 15,
          color: "#888",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ fontSize: 18 }}>💳</span>
        <a href="#" style={{ color: "#222" }}>
          이용권 구매
        </a>
      </div>
    </header>
  );
};

export default Header;
