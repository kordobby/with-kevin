import styled from "styled-components";
import { getButtonTheme } from "./getButtonTheme";
import { getButtonSize } from "./getButtonSize";

export type ButtonTheme = "primary" | "ghost" | "default" | "link" | "icon";
export type ButtonSize = "large" | "small" | "mid"; // md 는 default 하면 안대나
export type ButtonShape = "default" | "round";
export interface ButtonLayoutProps {
  theme: ButtonTheme;
  block?: boolean;
  shape?: ButtonShape;
  buttonSize?: ButtonSize;
}

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ buttonSize, shape }) => {
    return getButtonSize(buttonSize ?? "mid", shape ?? "default");
  }};
  ${({ theme, color, disabled }) => {
    return getButtonTheme(theme, color ?? "black", disabled ?? false);
  }}
  width: ${({ block }) => (block ? "100%" : "fit-content")};
  cursor: ${({ disabled }) => (disabled ? "none" : "default")} !important;
  div {
    margin-right: 10px;
  }
`;

export default {
  ButtonLayout,
};
