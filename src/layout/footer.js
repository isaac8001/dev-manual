import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <img
          className="footerlogo"
          src={process.env.PUBLIC_URL + "/img/footer-logo.png"}
          alt=""
        />
        <div>여기는 푸우 ~ 터어~ 입니다.</div>
        <div>유이삭 바보</div>
      </footer>
    </>
  );
};

export default Footer;
