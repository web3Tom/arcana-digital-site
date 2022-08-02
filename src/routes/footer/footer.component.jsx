import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h1>Footer</h1>
        <div className="footer-link-container">
          <Link to="/">HOME</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Footer;
