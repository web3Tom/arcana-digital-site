import {
  SalesAutomationSVG,
  ServiceContainer,
  ServicesH3,
  ServicesIconContainer,
  ServiceItemContainer,
  ServiceItemP,
  Divider,
} from "./services.styles";

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <ServicesH3>Services</ServicesH3>
      <Divider />
      <ServicesIconContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Sales & Marketing Automation</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
        <ServiceItemContainer>
          <SalesAutomationSVG />
          <ServiceItemP>Item 1</ServiceItemP>
        </ServiceItemContainer>
      </ServicesIconContainer>
    </ServiceContainer>
  );
};

export default ServiceSection;
