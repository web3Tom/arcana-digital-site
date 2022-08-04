import { Outlet, Link } from "react-router-dom";
import { FooterTitle } from "./footer.styles";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <FooterTitle>Footer</FooterTitle>
        <div className="footer-link-container">
          <Link to="/">HOME</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Footer;
