import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";
import { ReactComponent as ALTLOGO } from "../../assets/arcana-logo-final_white.svg";
// import { NavContext } from "../../contexts/nav-dropdown.context";
import NavigationDD from "../../components/navigation-dd/navigation-dd.component";
import { debounce } from "../../utils/helpers.utils";
import { NavHamburger } from "../../components/global.component.styles";
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
  const [visible, setVisible] = useState(true);
  const []
  const navigate = useNavigate();
  const signupBtn = (e) => {
    navigate("/");
  };

  // scroll-handler-function:
  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(currentScrollPos > 10);

    // set state to new scroll position
  }, 10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, handleScroll]);

  return (
    <>
      <NavStickyWrapper visible={visible}>
        <NavigationContainer>
          <NavLogoContainer to="/">
            {visible ? <ALTLOGO /> : <LOGO />}
          </NavLogoContainer>
          <NavLinksContainer>
            <NavigationDD label="Features" visible={visible} />
            <NavLink
              animation1
              to="/pricing"
              hoverColor={visible ? "white" : null}
              hoverBgColor={visible ? "white" : null}
            >
              Pricing
            </NavLink>
            <NavLink
              animation1
              to="/demo"
              hoverColor={visible ? "white" : null}
              hoverBgColor={visible ? "white" : null}
            >
              Demo
            </NavLink>
            <NavLink
              animation1
              to="/why-arcana"
              hoverColor={visible ? "white" : null}
              hoverBgColor={visible ? "white" : null}
            >
              Why Arcana?
            </NavLink>
          </NavLinksContainer>
          <NavAuthLinksContainer>
            <NavALink
              animation1
              href="https://app.arcanadigital.io"
              target="_blank"
              rel="noopener noreferrer"
              hoverColor={visible ? "white" : null}
              hoverBgColor={visible ? "white" : null}
            >
              Login
            </NavALink>
            <Button
              buttonType={BUTTON_TYPE_CLASS.base}
              height="40px"
              padding="0 18px"
              fontWeight="600"
              onClick={signupBtn}
              borderColHov={visible ? "white" : null}
            >
              Sign Up
            </Button>
          </NavAuthLinksContainer>
        </NavigationContainer>
      </NavStickyWrapper>
      <Outlet />
    </>
  );
};

export default Navigation;
