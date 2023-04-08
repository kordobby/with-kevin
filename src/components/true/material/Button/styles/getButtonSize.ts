import { ButtonShape, ButtonSize, ButtonTheme } from "./Button.styles";
import { css } from "styled-components";

export const getButtonSize = (size: ButtonSize, shape: ButtonShape) => {
  const smallButtonStyles = css`
    padding: 5px 15px;
    font-size: 10px;
    border-radius: ${shape === "round" ? "100px" : "5px"};
  `;
  const largeButtonStyles = css`
    padding: 20px 35px;
    font-size: 18px;
    border-radius: 5px;
    border-radius: ${shape === "round" ? "100px" : "10px"};
  `;
  const defaultButtonStyles = css`
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 5px;
    border-radius: ${shape === "round" ? "100px" : "8px"};
  `;

  const source = new Map([
    ["large", largeButtonStyles],
    ["small", smallButtonStyles],
    ["mid", defaultButtonStyles],
  ]);

  return source.get(size);
};

// getButtonSize
