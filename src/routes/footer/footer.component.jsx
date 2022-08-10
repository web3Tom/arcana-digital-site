import { Outlet, Link } from "react-router-dom";
import { FooterContainer, FooterTitle } from "./footer.styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterTitle>Footer</FooterTitle>
        <div className="footer-link-container">
          <Link to="/">HOME</Link>
        </div>
      </FooterContainer>
      <Outlet />
    </>
  );
};

export default Footer;
