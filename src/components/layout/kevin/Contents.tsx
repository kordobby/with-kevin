import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ContentsInterface {
  children: ReactNode;
}

const Contents: FC<ContentsInterface> = ({ children }) => {
  return <ContentsWrapper>{children}</ContentsWrapper>;
};

export default Contents;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid blue;
`;
