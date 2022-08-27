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
          visible={visible}
          animation1
          hovercolor={visible ? "white" : null}
          hoverbgcolor={visible ? "white" : null}
        >
          {label} <DDIcon visible={visible} />
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
