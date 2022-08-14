import styled from "styled-components";
import { device } from "../global.component.styles";

export const BaseButton = styled.button.attrs((props) => ({
  height: props.height || "45px",
  width: props.width || "auto",
  color: props.color || "#ffffff",
  bgColor: props.bgColor || `var(--color-primary)`,
  padding: props.padding || "0 18px",
  fontSize: props.fontSize || "15px",
  fontWeight: props.fontWeight || "600",
  borderColor: props.borderColor || `var(--color-primary)`,
  borderColHov: props.borderColHov || `var(--color-secondary)`,
}))`
  font-family: "Poppins";
  max-width: 215px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.borderColor};
  letter-spacing: 0.8px;
  line-height: 12px;
  text-transform: uppercase;
  border-radius: 70px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  -webkit-transition: background 0.3s ease;
  &:hover {
    background-color: var(--color-whiteBlue);
    color: var(--color-primary);
    border-color: ${(props) => props.borderColHov};
  }

  @media ${device.laptop} {
    font-size: 12px;
    height: 35px;
  }
`;

export const InvertedButton = styled.button.attrs((props) => ({
  height: props.height || "45px",
  width: props.width || "auto",
  color: props.color || `var(--color-primary)`,
  bgColor: props.bgColor || "#ffffff",
  padding: props.padding || "0 18px",
  fontSize: props.fontSize || "15px",
  fontWeight: props.fontWeight || "600",
  borderColor: props.borderColor || `var(--color-secondary)`,
  borderThick: props.borderThick || "1px",
}))`
  font-family: "Poppins";
  max-width: 215px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.borderThick} solid ${(props) => props.borderColor};
  letter-spacing: 0.8px;
  line-height: 12px;
  text-transform: uppercase;
  border-radius: 70px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  -webkit-transition: background 0.3s ease;

  &:hover {
    border-color: var(--color-primary);
    color: #ffffff;
    background-color: var(--color-primary);
  }

  @media ${device.laptop} {
    font-size: 12px;
    height: 35px;
  }
`;

export const GradientButton = styled.button`
  width: 100px;
  max-width: 215px;
  height: 45px;
  border-radius: 120px;
  position: relative;
  font-family: "Poppins";
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    60deg,
    #12232e,
    #007cc7,
    #4da8da,
    #00a49a,
    #00c742,
    #00a315
  );
  cursor: pointer;
  line-height: 12px;

  &::before {
    content: "";
    z-index: 1;
    position: absolite;
    display: block;
    width: 80%;
    height: 70%;
    filter: blur(15px);
    opacity: 0;
    background: linear-gradient(
      60deg,
      #12232e,
      #007cc7,
      #4da8da,
      #00a49a,
      #00c742,
      #00a315
    );
    transition: 0.3s opacity ease-in-out;
  }

  &:hover::before {
    filter: blur(15px);
    transition: 0.3s opacity ease-in-out;
    opacity: 0;
    background: linear-gradient(
      60deg,
      #12232e,
      #007cc7,
      #4da8da,
      #00a49a,
      #00c742,
      #00a315
    );
  }

  &::after {
    content: "Sign-Up";
    text-align: center;
    line-height: 32px;
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #FFFFFF;
    position: absolute;
    display: block;
    border-radius: 120px;
    width: 90%;
    height: 80%;
    top: 10%;
    left: 5%;
    background-color: rgba(19,20,22);

  @media ${device.laptop} {
    font-size: 12px;
    height: 35px;
  }
`;
