import styled from "styled-components";
import {
  CardInnerBoxAnimation,
  CardInnerBoxAnimationOpposite,
  fadeIn,
  fadeOut,
} from "./NameCardAnim";

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

const CardInner = styled.div`
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

  .card__Inner-BorderBox {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    border: 10px solid #fff;
    border-radius: 12px;
    transform-origin: center;
    transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease;
  }
  /* &:hover .card__Inner-BorderBox {
    animation: ${CardInnerBoxAnimation} 0.5s ease-in forwards;
    width: 80%;
    height: 90%;
    .icon {
      opacity: 0;
    }
  }
  &:not(:hover) .card__Inner-BorderBox {
    animation: ${CardInnerBoxAnimationOpposite} 0.5s ease-in forwards;
    width: 50%;
    height: 50%;
  } */

  .card__Inner-HideBox {
    /* opacity: 0; */
  }
  /* &:hover .card__Inner-HideBox {
    animation: ${fadeIn} 0.5s ease-in forwards;
  }
  &:not(:hover) .card__Inner-HideBox {
    animation: ${fadeOut} 0.5s ease-in forwards;
  } */
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 213px;
  padding-top: 50px;
  margin-bottom: 20px;
`;

const ProfilePic = styled.div`
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 100%;
  border: 5px solid #000;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
`;

const CardSubtitle = styled.div`
  color: white;
  font-size: 1.3rem;
`;

const CardDesc = styled.div`
  color: white;
`;

export {
  CardContainer,
  Card,
  CardShadow,
  CardInner,
  ProfileBox,
  ProfilePic,
  CardTitle,
  CardSubtitle,
  CardDesc,
};
