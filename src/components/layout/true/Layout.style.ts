import styled from "styled-components";
export const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%); */
  /* background-image: linear-gradient(45deg, #a8edea 0%, #fed6e3 100%); */
  /* background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%); */
  overflow: scroll;
  overflow-x: hidden;
`;

export const LayoutCenteredWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 560px) {
    width: 780px;
  }
`;

export const LayoutChildrenWrapper = styled.div`
  flex-grow: 1;
  z-index: 1;
  height: 100%;
`;

export const LayoutInnerWrapper = styled.div`
  height: 100vh;
`;
