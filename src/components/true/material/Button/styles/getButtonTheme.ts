import { ButtonTheme } from "./Button.styles";
import { css } from "styled-components";

export const getButtonTheme = (
  buttonType: ButtonTheme,
  color: string,
  disabled: boolean
) => {
  const primaryButtonStyles = css`
    background-color: ${disabled ? "gray" : color};
    color: white;
  `;
  const ghostButtonStyles = css`
    color: ${disabled ? "gray" : color};
    border: 2px solid ${disabled ? "gray" : color};
    background-color: white;
  `;
  const defaultButtonStyles = css`
    color: ${disabled ? "gray" : color};
    background: none;
  `;
  const linkButtonStlyes = css`
    text-decoration: underline;
    background: none;
    color: gray;
    width: fit-content;
    padding: 0px !important;
  `;
  const iconButtonStlyes = css`
    padding: 0px !important;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: ${disabled ? "gray" : color};
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
