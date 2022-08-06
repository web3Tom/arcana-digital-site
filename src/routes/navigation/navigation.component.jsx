import { Outlet, useNavigate } from "react-router-dom";
// import { useContext } from "react";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
// import { NavContext } from "../../contexts/nav-dropdown.context";

import Button, {
  BUTTON_TYPE_CLASS,
} from "../../components/button/button.component";

import {
  NavigationContainer,
  NavLinksContainer,
  NavAuthLinksContainer,
  NavLogoContainer,
  NavLink,
  NavALink,
  NavPLink,
  NavDDLink,
  DropDownWrapper,
  DropdownContent,
} from "./navigation.styles";

const Navigation = () => {
  // const { isDropDownOpen, setIsDropDownOpen } = useContext(NavContext);
  const navigate = useNavigate();
  const signupBtn = (e) => {
    navigate("/");
  };

  return (
    <>
      <NavigationContainer>
        <NavLogoContainer to="/">
          <LOGO />
        </NavLogoContainer>
        <NavLinksContainer>
          <DropDownWrapper>
            <NavPLink animation1>Software</NavPLink>
            <DropdownContent>
              <NavDDLink to="messaging">Messaging</NavDDLink>
              <NavDDLink to="reviews">Reviews</NavDDLink>
              <NavDDLink to="webchat">Webchat</NavDDLink>
              <NavDDLink to="payments">Payments</NavDDLink>
              <NavDDLink to="web-development">Web Development</NavDDLink>
            </DropdownContent>
          </DropDownWrapper>
          <NavLink animation1 to="/pricing">
            Pricing
          </NavLink>
          <NavLink animation1 to="/demo">
            Demo
          </NavLink>
          <NavLink animation1 to="/why-arcana">
            Why Arcana?
          </NavLink>
        </NavLinksContainer>
        <NavAuthLinksContainer>
          <NavALink
            animation1
            href="https://app.arcanadigital.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </NavALink>
          <Button
            buttonType={BUTTON_TYPE_CLASS.base}
            height="40px"
            padding="0 18px"
            fontWeight="600"
            onClick={signupBtn}
          >
            Sign Up
          </Button>
        </NavAuthLinksContainer>
      </NavigationContainer>
      {/* {isDropDownOpen && <NavDropDown />} */}
      <Outlet />
    </>
  );
};

export default Navigation;
