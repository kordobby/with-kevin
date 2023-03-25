import React from "react";
import styled from "styled-components";
import useShuffleTheme from "./hooks/useShuffleTheme";
import useGestureHandle from "./hooks/useGestureHandle";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import ProfileContents from "./ProfileContents";
import Profile from "./Profile";

const NameCard = () => {
  const { bgColor } = useShuffleTheme();
  const {
    moveDynamic,
    clearTransform,
    setCardElement,
    glowEffect,
    hologramEffect,
    hologramPosition,
    hologramFilter,
  } = useGestureHandle();

  return (
    <>
      <CardRoot onMouseMove={moveDynamic} onMouseLeave={clearTransform}>
        <Card ref={setCardElement} bgColor={bgColor}>
          <ProfileRoot>
            <Profile />
            <HologramGlow
              style={{
                backgroundPosition: hologramPosition,
                filter: hologramFilter,
                backgroundImage: hologramEffect,
              }}
            />
          </ProfileRoot>
          <CardContents>
            <ProfileContents types={`name`}>이트루</ProfileContents>
            <ProfileContents types={`email`}>Jr. FE Developer</ProfileContents>

            <ProfileContents
              types={`github`}
              icon={<VscGithubInverted size={20} />}
            >
              kordobby
            </ProfileContents>
            <ProfileContents types={`email`} icon={<MdEmail size={20} />}>
              leetrue@chicment.com
            </ProfileContents>
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

const HologramGlow = styled.img`
  z-index: 2;
  mask-image: url(https://assets.codepen.io/13471/sparkles.gif);
  width: 177px;
  height: 177px;
  border-radius: 300px;
  background-size: 50% 42%, 200% 700%, 300% 100%, 200% 100%;
  background-blend-mode: screen, difference, normal;
  opacity: 0.2;

  position: absolute;
  top: 61.12%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 4px));
  /* background-image: radial-gradient(circle at 50% -20%, #4bf5f213, #020a3a4d); */
`;

const ProfileRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 213px;
  padding-top: 50px;
  margin-bottom: 20px;
  /* border: 1px solid red; */
`;
