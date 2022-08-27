import styled from "styled-components";
import { device } from "../global.component.styles";

export const BaseButton = styled.button.attrs((props) => ({
  height: props.height || "45px",
  width: props.width || "auto",
  color: props.color || "#ffffff",
  bgColor: props.bgColor || `var(--color-primary)`,
  padding: props.padding || "0 18px",
  fontSize: props.fontSize || "15px",
  weight: props.weight || "600",
  borderColor: props.borderColor || `var(--color-primary)`,
  borderColHov: props.borderColHov || `var(--color-secondary)`,
}))`
  font-family: var(--font-primary);
  max-width: 215px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
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
    background-color: white;
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
  weight: props.weight || "600",
  borderColor: props.borderColor || `var(--color-secondary)`,
  borderThick: props.borderThick || "1px",
}))`
  font-family: var(--font-primary);
  max-width: 215px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
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

export const GradientButton = styled.button.attrs((props) => ({
  gwidth: props.gwidth || "210px",
  gheight: props.gheight || "50px",
}))`
  display: flex;
  position: relative;
  border: 1px solid rgba(19, 20, 22);
  border-radius: 120px;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  width: ${(props) => props.gwidth};
  height: ${(props) => props.gheight};
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

  &::after {
    content: "Schedule A Free Call";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    border-radius: 120px;
    width: 95%;
    height: 80%;
    text-align: center;
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: #ffffff;
    background-color: rgba(19, 20, 22);
    transition: width 0.2s linear, height 0.2s linear;

    @media ${device.laptop} {
      font-size: 12px;
      height: 35px;
    }
  }

  &:hover {
    &::after {
      width: 102%;
      height: 102%;
    }
  }
`;
