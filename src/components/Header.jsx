import "./Header.css";

const navItems = ["추천", "랭킹", "세일", "브랜드", "발매"];

export default function Header() {
  return (
    <header className="header">
      <div className="header__top container">
        <a href="/" className="header__logo">MUSINSA</a>
        <div className="header__search">
          <input type="text" placeholder="브랜드, 상품을 검색해보세요" />
        </div>
        <ul className="header__utils">
          <li>로그인</li>
          <li>좋아요</li>
          <li>장바구니</li>
        </ul>
      </div>
      <nav className="header__nav container">
        <ul>
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
