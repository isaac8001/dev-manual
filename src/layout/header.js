import "./header.css";

const Header = () => {
  return (
    <>
      <header style={{ backgroundImage: "url(img/header.png))" }}>
        <h1>
          <img src={process.env.PUBLIC_URL + "/img/main-logo.png"} alt="" />
        </h1>
        <ul>
          <li className="main">
            메인메뉴 1
            <ul className="sub">
              <li>
                <a href="#none">서브메뉴 1</a>
              </li>
              <li>
                <a href="#none">서브메뉴 2</a>
              </li>
              <li>
                <a href="#none">서브메뉴 3</a>
              </li>
              <li>
                <a href="#none">서브메뉴 4</a>
              </li>
            </ul>
          </li>
          <li className="main">
            메인메뉴 2
            <ul className="sub">
              <li>
                <a href="#none">서브메뉴 1</a>
              </li>
              <li>
                <a href="#none">서브메뉴 2</a>
              </li>
              <li>
                <a href="#none">서브메뉴 3</a>
              </li>
              <li>
                <a href="#none">서브메뉴 4</a>
              </li>
            </ul>
          </li>
          <li className="main">
            메인메뉴 3
            <ul className="sub">
              <li>
                <a href="#none">서브메뉴 1</a>
              </li>
              <li>
                <a href="#none">서브메뉴 2</a>
              </li>
              <li>
                <a href="#none">서브메뉴 3</a>
              </li>
              <li>
                <a href="#none">서브메뉴 4</a>
              </li>
            </ul>
          </li>
          <li className="main">
            메인메뉴 4
            <ul className="sub">
              <li>
                <a href="#none">서브메뉴 1</a>
              </li>
              <li>
                <a href="#none">서브메뉴 2</a>
              </li>
              <li>
                <a href="#none">서브메뉴 3</a>
              </li>
              <li>
                <a href="#none">서브메뉴 4</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
