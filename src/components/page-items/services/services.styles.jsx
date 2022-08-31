import { motion } from "framer-motion";
import styled from "styled-components";

import { GlobalH3 } from "../../global.component.styles";

export const ServiceContainer = styled.div`
  display: block;
  width: 100%;
  padding: 30px 20px;
  margin: 30px auto;
  text-align: center;
  background-color: var(--color-gray);
`;

export const ServicesH3 = styled(GlobalH3)`
  font-size: 36px;
  font-weight: 700;
  color: black;
  padding: 0;
  margin: 0;
  line-height: 1em;
`;

const DividerContainer = styled.div`
  display: block;
  width: auto;
  height: 10px;
  margin-bottom: 50px;
  padding: 0;
`;

export const ServicesIconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 150px);
  column-gap: 40px;
  row-gap: 30px;
  justify-items: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

export const ServiceItemContainer = styled.div`
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 10px;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 0;
  margin: 0;
`;

export const ServiceItemP = styled.p`
  font-family: var(--font-primary);
  color: var(--color-primary);
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const SalesAutomationSVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="70"
      height="70"
    >
      <motion.line
        fill="none"
        stroke={`var(--color-primary)`}
        stroke-width="5"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="2.5"
        y1="0"
        x2="2.5"
        y2="100"
      />
      <motion.line
        fill="none"
        stroke={`var(--color-primary)`}
        stroke-width="5"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        x1="100"
        y1="97.5"
        x2="0"
        y2="97.5"
      />
      <motion.rect
        fill={`var(--color-primary)`}
        x="15"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 71, height: 25 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.rect
        fill={`var(--color-primary)`}
        x="35"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 51, height: 45 }}
        transition={{
          duration: 1.5,
          delay: 0.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.rect
        fill={`var(--color-primary)`}
        x="55"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 31, height: 65 }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.rect
        fill={`var(--color-primary)`}
        x="75"
        width="12.5"
        initial={{ y: 100, height: 0 }}
        animate={{ y: 11, height: 85 }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.path
        d="M62,0.4L50.29,7.15l4.61,2.66c-2.96,6.12-8.68,15.9-19.02,24.97C24.76,44.55,13.46,48.95,7,50.94
	c1.06,0.35,2.13,0.69,3.19,1.04c5.97-1.51,17.57-5.28,28.87-15.09c10.75-9.33,16.11-19.69,18.59-25.49L62,13.91V0.4z"
        fill={`var(--color-primary)`}
      />
    </motion.svg>
  );
};

export const Divider = () => {
  return (
    <DividerContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 30"
        width="500"
        height="20"
      >
        <rect x="2.36" y="13.36" width="495.28" height="3.28" />
        <path d="M497.28,13.72v2.57H2.72v-2.57H497.28 M498,13H2v4h496V13L498,13z" />
      </svg>
    </DividerContainer>
  );
};
