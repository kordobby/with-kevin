import { FC } from "react";
import styled, { css } from "styled-components";

type TitleType = "subtitle";

interface TitleInterface {
  children: string;
  types?: TitleType;
}

const Title: FC<TitleInterface> = ({ children, types }) => {
  return (
    <TitleWrapper types={types}>
      <span>{children}</span>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div<{ types: TitleType }>`
  ${({ types }) => {
    switch (types) {
      case "subtitle":
        return css`
          font-weight: 700;
          font-size: 24px;
          margin-bottom: 100px;
        `;
      default:
        return css`
          font-weight: 800;
          font-size: 28px;
        `;
    }
  }}
`;

const TitleText = styled.span``;

export default Title;
