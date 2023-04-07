import { FC, HTMLProps } from "react";
import { ButtonLayout, ButtonLayoutProps } from "./Button.styles";

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {}

const ButtonText = () => {
  return <></>;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return <ButtonLayout buttonType="primary">{children}</ButtonLayout>;
};

export default Button;
