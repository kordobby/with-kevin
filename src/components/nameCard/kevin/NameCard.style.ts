import styled, { css } from "styled-components";
import {
  CardInnerBoxAnimation,
  CardInnerBoxAnimationOpposite,
  fadeIn,
  fadeOut,
} from "./NameCardAnim";

const Wrapper = styled.div`
  position: relative;
  button {
    position: absolute;
    top: -20%;
    right: 0;
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  height: 490px;
  perspective: 1000px;
`;

const Card = styled.div<{ rotateX: number; rotateY: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #272727;
  border: 1px solid white;
  border-radius: 12px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: ${({ rotateX, rotateY }) =>
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`};
  &:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
`;

const CardShadow = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const CardInner = styled.div<{ isTilted: boolean; bgColor: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* icon */
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .mainIcon {
    display: ${(props) => (props.isTilted ? "none" : "block")};
  }

  .card__Inner-BorderBox {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    border: 10px solid ${(props) => props.bgColor};
    border-radius: 12px;
    animation: ${(props) =>
        props.isTilted ? CardInnerBoxAnimation : CardInnerBoxAnimationOpposite}
      0.5s ease-in forwards;
  }

  .card__Inner-HideBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${(props) => (props.isTilted ? fadeIn : fadeOut)} 0.5s ease-in
      forwards;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 100%;
  border: 5px solid #000;
  z-index: 9999;
  overflow: hidden;
`;

const ProfilePic = styled.div<{ bgColor: string }>`
  width: 500px;
  height: 500px;
  background: ${(props) => props.bgColor};
`;

type TitleType = "main" | "sub" | "desc";

const TitleWrapper = styled.div<{ types: TitleType; bgColor: string }>`
  color: ${(props) => props.bgColor};
  ${({ types }) => {
    switch (types) {
      case "main":
        return css`
          font-size: 1.8rem;
          font-weight: 700;
        `;
      case "sub":
        return css`
          font-size: 1.3rem;
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

export {
  Wrapper,
  CardContainer,
  Card,
  CardShadow,
  CardInner,
  ProfileBox,
  ProfilePic,
  TitleWrapper,
};
