import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as LOGO } from "../../assets/arcana-logo-final_dark-light-blue-min.svg";

import Button from "../../components/button/button.component";
import {
  NavigationContainer,
  NavLinksContainer,
  NavAuthLinksContainer,
  NavLogoContainer,
  NavLink,
  NavALink,
} from "./navigation.styles";

const Navigation = () => {
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
          <NavLink animation1 to="/">
            Software
          </NavLink>
          <NavLink animation1 to="/pricing">
            Messaging
          </NavLink>
          <NavLink animation1 to="/demo">
            Pricing
          </NavLink>
          <NavLink animation1 to="/why-arcana">
            Demo
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
          <Button onClick={signupBtn}>Sign up</Button>
        </NavAuthLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
