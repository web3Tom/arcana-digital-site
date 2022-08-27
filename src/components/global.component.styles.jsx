import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//MEDIA QUERIES
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `screen and (max-width: ${size.mobileS})`,
  mobileM: `screen and (max-width: ${size.mobileM})`,
  mobileL: `screen and (max-width: ${size.mobileL})`,
  tablet: `screen and (max-width: ${size.tablet})`,
  laptop: `screen and (max-width: ${size.laptop})`,
  laptopL: `screen and (max-width: ${size.laptopL})`,
  desktop: `screen and (max-width: ${size.desktop})`,
  desktopL: `screen and (max-width: ${size.desktop})`,
};

// FONT AND HEADLINE STYLES
export const GlobalH1 = styled.h1.attrs((props) => ({
  fontFamily: props.fontFamily || `var(--font-primary)`,
  size: props.size || "72px",
  weight: props.weight || "900",
  color: props.color || `var(--color-primary)`,
  spacing: props.spacing || "normal",
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: 0;
  letter-spacing: ${(props) => props.spacing};
`;

export const GlobalH2 = styled.h2.attrs((props) => ({
  fontFamily: props.fontFamily || `var(--font-primary)`,
  size: props.size || "48px",
  weight: props.weight || "700",
  color: props.color || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: 0;
`;

// ~LINK STYLES~

//React-router Link Component
export const RouteLink = styled(Link).attrs((visible, ...props) => ({
  fontFamily: props.fontFamily || `var(--font-primary)`,
  size: props.size || "15px",
  weight: props.weight || "400",
  color:
    props.color ||
    (({ visible }) => (visible ? `var(--color-secondary)` : "white")),
  hovercolor: props.hovercolor || `var(--color-primary)`,
  hoverbgcolor: props.hoverbgcolor || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: ${(props) => props.hovercolor};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: ${(props) => props.hoverbgcolor};
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        transform: scale(0);
        transform-origin: center;
      }

      &:hover::after,
      &:focus::after {
        opacity: 1;
        transform: scale(1);
      }
    `}

  @media ${device.laptop} {
    font-size: 12px;
  }
`;

//Regular a tag
export const ALink = styled.a.attrs((visible, ...props) => ({
  fontFamily: props.fontFamily || `var(--font-primary)`,
  fontSize: props.fontSize || "15px",
  weight: props.weight || "400",
  color:
    props.color ||
    (({ visible }) => (visible ? `var(--color-secondary)` : "white")),
  hovercolor: props.hovercolor || `var(--color-primary)`,
  hoverbgcolor: props.hoverbgcolor || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: ${(props) => props.hovercolor};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: ${(props) => props.hoverbgcolor};
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        transform: scale(0);
        transform-origin: center;
      }

      &:hover::after,
      &:focus::after {
        opacity: 1;
        transform: scale(1);
      }
    `}

  @media ${device.laptop} {
    font-size: 12px;
  }
`;

//Drop-down p
export const PLink = styled.p.attrs((visible, ...props) => ({
  fontFamily: props.fontFamily || `var(--font-primary)`,
  fontSize: props.fontSize || "15px",
  weight: props.weight || "400",
  color:
    props.color ||
    (({ visible }) => (visible ? `var(--color-secondary)` : "white")),
  hovercolor: props.hovercolor || `var(--color-primary)`,
  hoverbgcolor: props.hoverbgcolor || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: ${(props) => props.hovercolor};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: ${(props) => props.hoverbgcolor};
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
        transform: scale(0);
        transform-origin: center;
      }

      &:hover::after,
      &:focus::after {
        opacity: 1;
        transform: scale(1);
      }
    `}

  @media ${device.laptop} {
    font-size: 12px;
  }
`;

// ~GLOBAL CONTAINER STYLES~

//Div Container for all Routes -- includes padding top to account for fixed nav -- placed in app.js
export const GlobalContentContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 100vh;
  padding-top: 85px;
  margin: 0;
`;
