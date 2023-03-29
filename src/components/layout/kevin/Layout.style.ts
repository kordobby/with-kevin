import styled from "styled-components";
import BG from "@/assets/black.svg";

interface LayoutWrapperInterface {
  mousePos?: { x: number; y: number };
}

export const LayoutWrapper = styled.div<LayoutWrapperInterface>`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    left: ${(props) => (props.mousePos ? props.mousePos.x : -300)}px;
    top: ${(props) => (props.mousePos ? props.mousePos.y : -300)}px;
    border-radius: 50%;
    box-shadow: 0 0 50px 50px rgba(255, 255, 255, 0.5);
    pointer-events: none;
    z-index: 1;
    transition: all 0.3s ease-out;
    transform: translate(-50%, -50%) scale(0);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 80px 80px rgba(255, 255, 255, 0.5);
  }
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

export const LayoutInnerWrapper = styled.div`
  height: 100vh;
`;
