import { ButtonHTMLAttributes, FC, useRef } from "react";
import styled from "styled-components";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "lg" | "md" | "sm";
  theme?: "primary" | "secondary";
  children?: string;
}

const TrueButton: FC<IButtonProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, size, children } = props;

  return (
    <Button ref={buttonRef} {...props}>
      {children}
    </Button>
  );
};

export default TrueButton;

const Button = styled.button<IButtonProps>``;
