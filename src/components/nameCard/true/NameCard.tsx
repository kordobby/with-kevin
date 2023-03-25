import styled, { css } from "styled-components";
import useShuffleTheme from "./hooks/useShuffleTheme";
import useGestureHandle from "./hooks/useGestureHandle";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
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
            {/* <Profile></Profile> */}
            <img
              src={"images/leetrue.png"}
              width="180"
              style={{ borderRadius: "90px" }}
            />
          </ProfileRoot>
          <CardContents>
            <CardText types={`name`}>이트루</CardText>
            <CardText types={`email`}>
              <VscGithubInverted size={20} />
              <span>kordobby</span>
            </CardText>
            <CardText types={`email`}>
              <MdEmail size={20} />
              <span>leetrue@chicment.com</span>
            </CardText>
            <CardText types={`date`}>Jr. FE Developer</CardText>
          </CardContents>
          <CardGlow style={{ backgroundImage: glowEffect }} />
          {/* <HologramGlow /> */}
        </Card>
      </CardRoot>
    </>
  );
};

export default NameCard;

const CardRoot = styled.div`
  /* For CardGlow Effect */
  position: relative;
  perspective: 800;
`;

const Card = styled.div<{ bgColor: string }>`
  width: 320px;
  height: 490px;
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

const HologramGlow = styled(CardGlow)`
  /* background-image: radial-gradient(circle at 50% -20%, #4bf5f213, #020a3a4d); */
`;

const CardText = styled.div<{ types: CardTextType }>`
  display: flex;
  align-items: center;
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
          margin-top: 8px;
        `;
      default:
        return css``;
    }
  }}
  span {
    margin-left: 5px;
  }
`;

const ProfileRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 213px;
  padding-top: 30px;
  margin-bottom: 50px;
`;
