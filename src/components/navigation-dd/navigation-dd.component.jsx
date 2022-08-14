import { useContext } from "react";
import { NavigationContext } from "../../contexts/navigation.context";

import {
  DropDownWrapper,
  DropdownContent,
  NavPLink,
  DDIcon,
  NavDDLink,
} from "./navigation-dd.styles";

const NavigationDD = ({ label }) => {
  const { visible } = useContext(NavigationContext);

  return (
    <>
      <DropDownWrapper>
        <NavPLink
          animation1
          hoverColor={visible ? "white" : null}
          hoverBgColor={visible ? "white" : null}
        >
          {label} <DDIcon />
        </NavPLink>
        <DropdownContent>
          <NavDDLink to="messaging">Messaging</NavDDLink>
          <NavDDLink to="reviews">Reviews</NavDDLink>
          <NavDDLink to="webchat">Webchat</NavDDLink>
          <NavDDLink to="payments">Payments</NavDDLink>
          <NavDDLink to="web-development">Web Development</NavDDLink>
        </DropdownContent>
      </DropDownWrapper>
    </>
  );
};

export default NavigationDD;
