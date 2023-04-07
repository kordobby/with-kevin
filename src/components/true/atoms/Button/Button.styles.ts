import styled, { css } from "styled-components";
import { colors } from "@/utils/YoontilColors";

export type ButtonTypes = "primary" | "ghost" | "default";

export interface ButtonLayoutProps {
  buttonType: ButtonTypes;
}
const getButtonStyles = (buttonType: ButtonTypes, color: string) => {
  const primaryButtonStyles = css`
    background-color: ${color};
    color: white;
  `;
  const ghostButtonStyles = css`
    color: ${color};
    border: 1px solid ${color};
  `;
  const defaultButtonStyles = css``;

  const source = new Map([
    ["primary", primaryButtonStyles],
    ["ghost", ghostButtonStyles],
    ["default", defaultButtonStyles],
  ]);

  return source.get(buttonType);
};

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  padding: 10px 30px;
  color: white;
  border: none;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  ${({ buttonType, color }) => {
    return getButtonStyles(buttonType, color ?? "black");
  }}
`;

export default {
  ButtonLayout,
};
