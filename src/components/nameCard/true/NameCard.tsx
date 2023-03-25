import styled, { css } from "styled-components";
import useShuffleTheme from "./hooks/useShuffleTheme";
import useGestureHandle from "./hooks/useGestureHandle";
import Profile from "./Profile";
type CardTextType = "name" | "email" | "date";

const NameCard = () => {
  const { shuffleColors, bgColor } = useShuffleTheme();
  const { moveDynamic, clearTransform, setCardElement, glowEffect } =
    useGestureHandle();

  return (
    <>
      <CardRoot onMouseMove={moveDynamic} onMouseLeave={clearTransform}>
        <Card ref={setCardElement} bgColor={bgColor}>
          <ProfileRoot>
            <Profile></Profile>
            {/* <img src={"images/pikachu.svg"} width="180" /> */}
          </ProfileRoot>
          <CardContents>
            <CardText types={`name`}>이트루</CardText>
            <CardText types={`email`}>poordobby@naver.com</CardText>
            <CardText types={`date`}>2022년 3월 21일</CardText>
          </CardContents>
          <CardGlow style={{ backgroundImage: glowEffect }} />
        </Card>
      </CardRoot>
      <button onClick={shuffleColors}>shuffle</button>
    </>
  );
};

export default NameCard;

const CardRoot = styled.div`
  /* For CardGlow Effect */
  position: relative;
`;

const Card = styled.div<{ bgColor: string }>`
  width: 280px;
  height: 480px;
  border: 1px solid white;
  border-radius: 12px;

  /* Glassmorphism */
  background-color: rgba(255, 255, 255, 0.247);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(140%);
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.2);

  /* Animation */
  transition-duration: "0.3s";
  transition-property: "transform, box-shadow, background";
  transition-timing-function: "ease-out";
`;

const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardGlow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;

  /* parent : CardRoot */
  position: absolute;
  left: 0;
  top: 0;

  /* light */
  background-image: radial-gradient(circle at 50% -20%, #ffffff31, #0000001d);
`;

const CardText = styled.span<{ types: CardTextType }>`
  color: #6870d8;
  ${({ types }) => {
    switch (types) {
      case "name":
        return css`
          font-weight: 800;
          font-size: 26px;
        `;
      case "email":
        return css`
          font-weight: 500;
          font-size: 16px;
          margin-top: 8px;
        `;
      case "date":
        return css`
          font-size: 12px;
          margin-top: 16px;
        `;
      default:
        return css``;
    }
  }}
`;

const ProfileRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 213px;
  /* border: 1px solid blue; */
  padding-top: 30px;
  img {
    mask-position: center;
    mask-size: 50%;
    mask-mode: alpha;
    display: block;
    /* mask-repeat: no-repeat; */
    mask-image: url("https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/trainerbg.jpg");
  }
`;
