import styled, { css } from "styled-components";
import { colors } from "@/utils/YoontilColors";
import { FC } from "react";
import { ContentsTypes } from "@/templates/common/HomeTemplates";

export type MemberTypes = "true" | "kevin";

interface ContentProps {
  types: MemberTypes;
  contentsType: ContentsTypes;
}

const Content: FC<ContentProps> = ({ types, contentsType }) => {
  return (
    <ContentWrapper types={types}>
      <ContentHeader>
        <HeaderDotsWrapper>
          {[colors.miffy.red, colors.miffy.yellow, colors.miffy.green].map(
            (value) => {
              return (
                <div
                  className="dots"
                  key={`dots-${value}`}
                  style={{ backgroundColor: `${value}` }}
                />
              );
            }
          )}
        </HeaderDotsWrapper>
        <span>
          {types} {contentsType}
        </span>
      </ContentHeader>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div<{ types: MemberTypes }>`
  width: 400px;
  height: 280px;
  border-radius: 10px;
  position: absolute;
  transition: transform 1s ease-in-out;

  ${({ types }) => {
    switch (types) {
      case "true":
        return css`
          bottom: 0;
          right: 0;
          background-color: white;
          z-index: 1;
        `;
      case "kevin":
        return css`
          top: 0;
          left: 0;
          background-color: #ffffe3;
          &:hover {
            transform: rotate(-380deg);
            z-index: 2;
          }
        `;
      default:
        return css`
          bottom: 0;
          right: 0;
          background-color: white;
        `;
    }
  }}
`;

const ContentHeader = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  span {
    color: #0c0c0c3a;
    font-size: 14px;
    font-weight: 700;
  }
`;

const HeaderDotsWrapper = styled.div`
  display: flex;
  gap: 5px;
  .dots {
    width: 10px;
    height: 10px;
    border-radius: 7px;
  }
  /* border: 1px solid blue; */
`;
