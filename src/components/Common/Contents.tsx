import React from "react";
import Content from "./Content";
import styled from "styled-components";
const Contents = () => {
  return (
    <ContentsWrapper>
      <Content types="true"></Content>
      <Content types="kevin"></Content>
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
