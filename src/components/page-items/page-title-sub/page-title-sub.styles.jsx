import styled from "styled-components";
import { motion } from "framer-motion";
import { HomeHeroH1 } from "../../hero/home-hero/home-hero.styles";
import { GlobalH3 } from "../../global.component.styles";

export const SectionContainer = styled(motion.div)`
  display: block;
  margin: 0 auto 80px auto;
  text-align: center;
  max-width: 1200px;
`;

export const SectionTitle = styled(HomeHeroH1)`
  padding-bottom: 50px;
  color: var(--color-secondary);
  line-height: 1.1em;

  b {
    font-weight: inherit;
    color: var(--color-primary);
    font-style: normal;
    letter-spacing: normal;
  }
`;

export const SectionSubText = styled(GlobalH3)``;
