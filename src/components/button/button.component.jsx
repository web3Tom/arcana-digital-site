import { BaseButton, InvertedButton, GradientButton } from "./button.styles";

export const BUTTON_TYPE_CLASS = {
  base: "base",
  inverted: "inverted",
  gradient: "gradient",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASS.gradient]: GradientButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
