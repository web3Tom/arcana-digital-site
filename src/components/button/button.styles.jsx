import styled from "styled-components";

export const BaseButton = styled.button`
  font-family: "Poppins";
  max-width: 215px;
  width: auto;
  height: 50px;
  letter-spacing: 0.8px;
  line-height: 50px;
  padding: 0 20px 0 20px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #007cc7;
  color: #ffffff;
  border: 1px solid #007cc7;
  border-radius: 70px;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
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
