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
          visible={visible}
          animation1
          to="/pricing"
          hovercolor={visible ? `var(--color-primary)` : null}
          hoverbgcolor={visible ? `var(--color-primary)` : null}
        >
          Pricing
        </NavLink>
        <NavLink
          visible={visible}
          animation1
          to="/demo"
          hovercolor={visible ? "white" : "white"}
          hoverbgcolor={visible ? "white" : "white"}
        >
          Demo
        </NavLink>
        <NavLink
          visible={visible}
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
          visible={visible}
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
            buttonType={BUTTON_TYPE_CLASS.gradient}
            onClick={signupBtn}
            height="38px"
          ></Button>
        )}
      </NavAuthLinksContainer>
    </>
  );
};

export default NavLinks;
