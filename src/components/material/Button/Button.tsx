import styled from "styled-components";
import { ButtonProps } from "./ButtonType";

const Button = ({
  width = 100,
  height = 40,
  color = "#ffffff",
  backgroundColor = "#007bff",
  text,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    opacity: 50%;
  }
`;
