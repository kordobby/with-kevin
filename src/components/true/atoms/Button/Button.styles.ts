import styled, { css } from "styled-components";
import { colors } from "@/utils/YoontilColors";

export type ButtonTypes = "primary" | "ghost" | "default" | "link";

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
    border: 2px solid ${color};
    background-color: white;
  `;
  const defaultButtonStyles = css`
    color: ${color};
  `;
  const linkButtonStlyes = css`
    text-decoration: underline;
    background: none;
    color: gray;
    width: fit-content;
  `;
  const source = new Map([
    ["primary", primaryButtonStyles],
    ["ghost", ghostButtonStyles],
    ["default", defaultButtonStyles],
    ["link", linkButtonStlyes],
  ]);

  return source.get(buttonType);
};

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  padding: 10px 30px;
  color: white;
  border: none;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ buttonType, color }) => {
    return getButtonStyles(buttonType, color ?? "black");
  }}

  div {
    margin-right: 10px;
  }
`;

export default {
  ButtonLayout,
};
