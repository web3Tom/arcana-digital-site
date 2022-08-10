import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
// import { NavContext } from "../../contexts/nav-dropdown.context";
import NavigationDD from "../../components/navigation-dd/navigation-dd.component";
import { debounce } from "../../utils/helpers.utils";

import Button, {
  BUTTON_TYPE_CLASS,
} from "../../components/button/button.component";

import {
  NavStickyWrapper,
  NavigationContainer,
  NavLinksContainer,
  NavAuthLinksContainer,
  NavLogoContainer,
  NavLink,
  NavALink,
} from "./navigation.styles";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const signupBtn = (e) => {
    navigate("/");
  };

  // scroll-handler-function:
  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 50) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <NavStickyWrapper topPos={visible ? "0" : "-60px"}>
        <NavigationContainer>
          <NavLogoContainer to="/">
            <LOGO />
          </NavLogoContainer>
          <NavLinksContainer>
            <NavigationDD label="Products" />
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
      </NavStickyWrapper>
      {/* {isDropDownOpen && <NavDropDown />} */}
      <Outlet />
    </>
  );
};

export default Navigation;
