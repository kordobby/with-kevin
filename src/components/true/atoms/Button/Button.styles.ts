import styled, { css } from "styled-components";

export type ButtonTypes = "primary" | "ghost" | "default";

export interface ButtonLayoutProps {
  buttonType: ButtonTypes;
}

const primaryButtonStyles = css``;
const ghostButtonStyles = css``;
const defaultButtonStyles = css``;

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  padding: 10px 30px;
  border: none;
  width: 100%;
  cursor: pointer;
  ${({ buttonType }) => {
    const source = new Map([
      ["primary", primaryButtonStyles],
      ["ghost", ghostButtonStyles],
      ["default", defaultButtonStyles],
    ]);

    return source.get(buttonType);
  }}
`;

export default {
  ButtonLayout,
};
