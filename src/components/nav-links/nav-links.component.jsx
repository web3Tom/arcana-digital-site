import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NavigationDD from "../navigation-dd/navigation-dd.component";
import { NavigationContext } from "../../contexts/navigation.context";

import Button, {
  BUTTON_TYPE_CLASS,
} from "../../components/button/button.component";

import {
  NavLinksContainer,
  NavAuthLinksContainer,
  NavLink,
  NavALink,
} from "./nav-links.styles";

const NavLinks = () => {
  const { visible } = useContext(NavigationContext);
  const navigate = useNavigate();
  const signupBtn = (e) => {
    navigate("/");
  };

  return (
    <>
      <NavLinksContainer>
        <NavigationDD label="Features" />
        <NavLink
          animation1
          to="/pricing"
          hovercolor={visible ? "white" : null}
          hoverbgcolor={visible ? "white" : null}
        >
          Pricing
        </NavLink>
        <NavLink
          animation1
          to="/demo"
          hovercolor={visible ? "white" : null}
          hoverbgcolor={visible ? "white" : null}
        >
          Demo
        </NavLink>
        <NavLink
          animation1
          to="/why-arcana"
          hovercolor={visible ? "white" : null}
          hoverbgcolor={visible ? "white" : null}
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
          hovercolor={visible ? "white" : null}
          hoverbgcolor={visible ? "white" : null}
        >
          Login
        </NavALink>
        {visible ? (
          <Button
            buttonType={BUTTON_TYPE_CLASS.inverted}
            onClick={signupBtn}
            height="38px"
          >
            Sign-up
          </Button>
        ) : (
          <Button
            buttonType={BUTTON_TYPE_CLASS.base}
            onClick={signupBtn}
            height="38px"
          >
            Sign Up
          </Button>
        )}
      </NavAuthLinksContainer>
    </>
  );
};

export default NavLinks;
