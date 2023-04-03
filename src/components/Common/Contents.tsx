import React, { FC } from "react";
import Content, { MemberTypes } from "./Content";
import styled from "styled-components";
import { ContentsTypes } from "@/templates/common/HomeTemplates";

interface ContentsProps {
  types: ContentsTypes;
}

const Contents: FC<ContentsProps> = ({ types }) => {
  const members = ["true", "kevin"] as MemberTypes[];

  return (
    <ContentsWrapper>
      {members.map((value, index) => {
        return (
          <Content
            key={`content-${index}`}
            types={value}
            contentsType={types}
          />
        );
      })}
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.div`
  position: relative;
  /* border: 1px solid red; */
  margin-top: 100px;
  height: 360px;
  width: 480px;
`;
