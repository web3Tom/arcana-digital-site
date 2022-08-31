import {
  SectionContainer,
  SectionTitle,
  SectionSubText,
} from "./page-title-sub.styles";

export const PageTitleSub = (props) => {
  return (
    <SectionContainer>
      <SectionTitle>
        <b>{props.btitle}</b>
        {props.title}
      </SectionTitle>
      <SectionSubText>{props.sub}</SectionSubText>
    </SectionContainer>
  );
};

export const PageTitleSub2 = (props) => {
  return (
    <SectionContainer>
      <SectionTitle>
        {props.title}
        <b>{props.btitle}</b>
      </SectionTitle>
      <SectionSubText>{props.sub}</SectionSubText>
    </SectionContainer>
  );
};
