import { FC } from "react";
import styled, { css } from "styled-components";
import { LayoutContext } from "./Layout";

type TitleType = "subtitle" | "desc";

interface TitleInterface {
  children: string;
  types?: TitleType;
}

const Title: FC<TitleInterface> = ({ children, types }) => {
  const textPalette = ["white", "white", "black", "white", "black"];
  return (
    <LayoutContext.Consumer>
      {(value) => (
        <TitleWrapper types={types} textColor={textPalette[`${value}`]}>
          <span>{children}</span>
        </TitleWrapper>
      )}
    </LayoutContext.Consumer>
  );
};

const TitleWrapper = styled.div<{ types?: TitleType; textColor?: string }>`
  color: ${({ textColor }) => textColor ?? "white"};
  ${({ types }) => {
    switch (types) {
      case "subtitle":
        return css`
          font-weight: 700;
          font-size: 24px;
          /* margin-bottom: 40px; */
        `;
      case "desc":
        return css`
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 40px;
        `;
      default:
        return css`
          margin-top: 100px;
          font-weight: 800;
          font-size: 32px;
        `;
    }
  }}
`;

const TitleText = styled.span``;

export default Title;
