import { Outlet } from "react-router-dom";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_white.svg";
import Button, {
  BUTTON_TYPE_CLASS,
} from "../../components/button/button.component";
import { GrFacebook } from "react-icons/gr";

import {
  FooterStickyWrapper,
  FooterContainer,
  FooterCol,
  FooterLogoContainer,
  FooterSectionTitle,
  FooterLink,
} from "./footer.styles";

const Footer = () => {
  return (
    <>
      <FooterStickyWrapper>
        <FooterContainer>
          <FooterCol>
            <FooterLogoContainer to="/">
              <LOGO />
            </FooterLogoContainer>
            <Button buttonType={BUTTON_TYPE_CLASS.base}>Sign Up</Button>
          </FooterCol>
          <FooterCol>
            <FooterSectionTitle>Company</FooterSectionTitle>
            <FooterLink to="/about-us">About us</FooterLink>
            <FooterLink to="/contact-us">Contact</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          </FooterCol>
          <FooterCol>
            <FooterSectionTitle>Features</FooterSectionTitle>
            <FooterLink to="/messaging">Messaging</FooterLink>
            <FooterLink to="/reviews">Reviews</FooterLink>
            <FooterLink to="/webchat">WebChat</FooterLink>
            <FooterLink to="/payments">Payments</FooterLink>
          </FooterCol>
          <FooterCol>
            <FooterSectionTitle>Support</FooterSectionTitle>
            <FooterLink to="about-us">About us</FooterLink>
            <FooterLink to="contact-us">Contact</FooterLink>
            <FooterLink to="terms-of-service">Terms of Service</FooterLink>
            <FooterLink to="privacy-policy">Privacy Policy</FooterLink>
          </FooterCol>
          <FooterCol>
            <FooterSectionTitle>Connect with us</FooterSectionTitle>
            <GrFacebook size={42} />
          </FooterCol>
        </FooterContainer>
      </FooterStickyWrapper>
      <Outlet />
    </>
  );
};

export default Footer;
