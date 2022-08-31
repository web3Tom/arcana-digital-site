import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../global.component.styles";

export const ReviewContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10%;
  width: 1000px;
  padding: 25px;
  margin: 100px auto;
  border-radius: 25px;
  height: auto;
  background-color: var(--color-secondary);

  @media ${device.laptop1024} {
    width: 800px;
    height: 400px;
  } ;
`;

export const HomeReviewImgContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 5px;
`;

export const HomeReviewImg = styled(motion.img)`
  width: 170px;
  height: 170px;
  border: 2px solid white;
  border-radius: 50%;
  margin-left: 20px;
`;

export const HomeReviewImgSubTxt = styled.p`
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 300;
  color: white;
  text-align: center;
`;

export const HomeReviewTextContainer = styled(motion.div)`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  font-family: "Poppins", sans-serif;
`;

export const HomeReviewQuotations = styled(motion.p).attrs((props) => ({
  textalign: props.textalign || "left",
}))`
  width: 100%;
  font-size: 40px;
  padding: 0;
  margin: 0;
  font-weight: 900;
  color: white;
  text-align: ${(props) => props.textalign};
`;

export const HomeReviewText = styled(motion.p)`
  font-family: var(--font-primary);
  color: white;
  font-weight: 300;
  font-size: 21px;
  align-text: cetner;
  line-height: 2em;
  width: 90%;
  padding: 0;
  margin: 0;
`;
