import styled, { css } from "styled-components";

type TitleType = "main" | "sub" | "desc";

interface TitleInterface {
  children: string;
  types: TitleType;
}

const Title = ({ children, types }: TitleInterface) => {
  return (
    <TitleWrapper types={types}>
      <span>{children}</span>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div<{ types: TitleType }>`
  color: white;
  ${({ types }) => {
    switch (types) {
      case "main":
        return css`
          margin-top: 100px;
          font-weight: 700;
          font-size: 2rem;
        `;
      case "sub":
        return css`
          font-weight: 600;
          font-size: 1.5rem;
        `;
      case "desc":
        return css`
          font-weight: 500;
          font-size: 1.2rem;
          margin-bottom: 40px;
        `;
      default:
        return;
    }
  }}
`;

export default Title;
