import styled, { css } from "styled-components";
import { colors } from "@/utils/YoontilColors";

export type ButtonTheme = "primary" | "ghost" | "default" | "link" | "icon";
export type ButtonSize = "large" | "small"; // md 는 default 하면 안대나
export type ButtonShape = "default" | "round" | "circle";
export interface ButtonLayoutProps {
  theme: ButtonTheme;
  block?: boolean;
  shape?: ButtonShape;
  // disabled?: boolean;
}
const getButtonStyles = (
  buttonType: ButtonTheme,
  color: string,
  disabled: boolean
) => {
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
    background: none;
  `;
  const linkButtonStlyes = css`
    text-decoration: underline;
    background: none;
    color: gray;
    width: fit-content;
  `;
  const iconButtonStlyes = css`
    padding: 0px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${color};
    font-size: 21px;
    svg {
      /* border: 1px solid red; */
      margin-top: 1px;
    }
  `;
  const source = new Map([
    ["primary", primaryButtonStyles],
    ["ghost", ghostButtonStyles],
    ["default", defaultButtonStyles],
    ["link", linkButtonStlyes],
    ["icon", iconButtonStlyes],
  ]);

  return source.get(buttonType);
};

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  padding: 10px 30px;
  width: 100%;
  width: ${({ block }) => (block ? "100%" : "fit-content")};
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ theme, color, disabled }) => {
    return getButtonStyles(theme, color ?? "black", disabled ?? false);
  }}

  div {
    margin-right: 10px;
  }
`;

export default {
  ButtonLayout,
};
