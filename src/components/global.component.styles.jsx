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
//

//

// FONT AND HEADLINE STYLES
export const GlobalH1 = styled.h1.attrs((props) => ({
  fontFamily: props.fontFamily || `var(--header-font)`,
  size: props.size || "72px",
  fontWeight: props.fontWeight || "900",
  color: props.color || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export const GlobalH2 = styled.h2.attrs((props) => ({
  fontFamily: props.fontFamily || `var(--body-font)`,
  fontSize: props.fontSize || "48px",
  weight: props.weight || "700",
  color: props.color || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

//
//
//

// ~GLOBAL CONTAINER STYLES~

//
//
//

//Hero context container
export const HeroContentWrapper = styled.div`
  display: block;
  padding-top: 60px;
  width: 100%;
`;

//
//
//

// ~LINK STYLES~

//
//
//

//React-router Link Component
export const RouteLink = styled(Link).attrs((props) => ({
  fontFamily: props.fontFamily || `var(--body-font)`,
  size: props.size || "15px",
  fontWeight: props.fontWeight || "400",
  color: props.color || "black",
  hoverColor: props.hoverColor || `var(--color-primary)`,
  hoverBgColor: props.hoverBgColor || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: ${(props) => props.hoverColor};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: ${(props) => props.hoverBgColor};
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
export const ALink = styled.a.attrs((props) => ({
  fontFamily: props.fontFamily || `var(--body-font)`,
  fontSize: props.fontSize || "15px",
  fontWeight: props.weight || "400",
  color: props.color || "black",
  hoverColor: props.hoverColor || `var(--color-primary)`,
  hoverBgColor: props.hoverBgColor || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: ${(props) => props.hoverColor};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: ${(props) => props.hoverBgColor};
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
export const PLink = styled.p.attrs((props) => ({
  fontFamily: props.fontFamily || `var(--body-font)`,
  fontSize: props.fontSize || "15px",
  fontWeight: props.fontWeight || "400",
  color: props.color || "black",
  hoverColor: props.hoverColor || `var(--color-primary)`,
  hoverBgColor: props.hoverBgColor || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: ${(props) => props.hoverColor};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: ${(props) => props.hoverBgColor};
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

//
//
//

// ~NAVIGATION HAMBURGER~

//
//
//
