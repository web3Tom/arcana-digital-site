import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// FONT AND HEADLINE STYLES
export const GlobalH1 = styled.h1.attrs((props) => ({
  font: props.font || `var(--header-font)`,
  size: props.size || "72px",
  weight: props.weight || "900",
  color: props.color || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

export const GlobalH2 = styled.h2.attrs((props) => ({
  fontfamily: props.font || `var(--body-font)`,
  fontsize: props.size || "48px",
  fontweight: props.weight || "700",
  color: props.color || `var(--color-primary)`,
}))`
  font-family: ${(props) => props.fontfamily};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
`;

//
//
//

// LINK STYLES
//
//

//React-router Link Component
export const RouteLink = styled(Link).attrs((props) => ({
  fontfamily: props.font || `var(--body-font)`,
  fontsize: props.size || "15px",
  fontweight: props.weight || "400",
  color: props.color || "black",
}))`
  font-family: ${(props) => props.fontfamily};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: var(--color-primary);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: var(--color-primary);
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
`;

//Regular a tag
export const ALink = styled.a.attrs((props) => ({
  fontfamily: props.font || `var(--body-font)`,
  fontsize: props.size || "15px",
  fontweight: props.weight || "400",
  color: props.color || "black",
}))`
  font-family: ${(props) => props.fontfamily};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: var(--color-primary);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: var(--color-primary);
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
`;

//Drop-down p
export const PLink = styled.p.attrs((props) => ({
  fontfamily: props.font || `var(--body-font)`,
  fontsize: props.size || "15px",
  fontweight: props.weight || "400",
  color: props.color || "black",
}))`
  font-family: ${(props) => props.fontfamily};
  font-size: ${(props) => props.fontsize};
  font-weight: ${(props) => props.fontweight};
  color: ${(props) => props.color};
  text-decoration: none;

  ${(props) =>
    props.animation1 &&
    css`
      position: relative;

      &:hover {
        color: var(--color-primary);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 0.05em;
        background-color: var(--color-primary);
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
`;

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
  mobileS: `screen and (min-width: ${size.mobileS})`,
  mobileM: `screen and (min-width: ${size.mobileM})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  laptop: `screen and (min-width: ${size.laptop})`,
  laptopL: `screen and (min-width: ${size.laptopL})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  desktopL: `screen and (min-width: ${size.desktop})`,
};
