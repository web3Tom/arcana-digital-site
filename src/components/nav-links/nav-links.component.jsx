import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import NavigationDD from "../navigation-dd/navigation-dd.component";
import { NavigationContext } from "../../contexts/navigation.context";

import { GradientButton } from "../../components/button/button.styles";

import {
  NavLinksContainer,
  NavAuthLinksContainer,
  NavLink,
  NavALink,
} from "./nav-links.styles";

const NavLinks = () => {
  const { scrolled } = useContext(NavigationContext);
  const navigate = useNavigate();
  const signupBtn = (e) => {
    navigate("/");
  };

  return (
    <>
      <NavLinksContainer>
        <NavigationDD label="Features" />
        <NavLink
          scrolled={scrolled}
          animation1
          to="/pricing"
          hovercolor={scrolled ? `var(--color-primary)` : null}
          hoverbgcolor={scrolled ? `var(--color-primary)` : null}
        >
          Pricing
        </NavLink>
        <NavLink
          scrolled={scrolled}
          animation1
          to="/demo"
          hovercolor={scrolled ? "white" : "white"}
          hoverbgcolor={scrolled ? "white" : "white"}
        >
          Demo
        </NavLink>
        <NavLink
          scrolled={scrolled}
          animation1
          to="/why-arcana"
          hovercolor={scrolled ? "white" : null}
          hoverbgcolor={scrolled ? "white" : null}
        >
          Why Arcana?
        </NavLink>
      </NavLinksContainer>
      <NavAuthLinksContainer>
        <NavALink
          scrolled={scrolled}
          animation1
          href="https://app.arcanadigital.io"
          target="_blank"
          rel="noopener noreferrer"
          hovercolor={scrolled ? "white" : null}
          hoverbgcolor={scrolled ? "white" : null}
        >
          Login
        </NavALink>
        <GradientButton onClick={signupBtn} />
      </NavAuthLinksContainer>
    </>
  );
};

export default NavLinks;
