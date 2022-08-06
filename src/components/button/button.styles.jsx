import styled from "styled-components";

export const BaseButton = styled.button.attrs((props) => ({
  height: props.height || "45px",
  width: props.width || "auto",
  padding: props.padding || "0 20px",
  fontSize: props.fontSize || "15px",
  fontWeight: props.fontWeight || "600",
}))`
  font-family: "Poppins";
  max-width: 215px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: 0.8px;
  line-height: 50px;
  text-transform: uppercase;
  background-color: #007cc7;
  color: #ffffff;
  border: 1px solid #007cc7;
  border-radius: 70px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  -webkit-transition: background 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color: #007cc7;
    border-color: #1e2761;
  }
`;

export const InvertedButton = styled(BaseButton)`
  border-color: #12232e;
  background-color: #12232e;
  &:hover {
    border-color: #12232e;
    color: #007cc7;
  }
`;
