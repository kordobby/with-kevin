import styled, { css } from "styled-components";
import { colors } from "../../../utils/YoontilColors";
import { gsap } from "gsap";
import React, { useMemo, useState } from "react";
import useShuffleTheme from "./hooks/useShuffleTheme";

type CardTextType = "name" | "email" | "date";

const NameCard = () => {
  const { shuffleColors, bgColor } = useShuffleTheme();

  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);

  const moveDynamic: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (cardElement !== null) {
      const bounds = cardElement.getBoundingClientRect();

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;

      const cardX = leftX - bounds.width / 2;
      const cardY = topY - bounds.height / 2;

      const cardRotateX = cardY / 100;
      const cardRotateY = (-1 * cardX) / 100;

      cardElement.style.setProperty("--ctX", `${cardX}`);
      cardElement.style.setProperty("--ctY", `${cardY}`);

      gsap.to(cardElement, {
        scale: 1.07,
        rotateX: cardRotateX * 5,
        rotateY: cardRotateY * 5,
      });

      //   handleGlow(event);
    }
  };

  const clearTransform = () => {
    if (cardElement !== null) {
      cardElement.style.setProperty("--ctX", "0px");
      cardElement.style.setProperty("--ctY", "0px");

      gsap.to(cardElement, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
      });
    }
  };

  const glowEffect = useMemo(() => {
    if (cardElement == null) return;
    const bounds = cardElement.getBoundingClientRect();
    const circleGradientX = `calc(calc(var(--ctX) * 2) + ${
      bounds.width / 2
    }px)`;
    const circleGradientY = `calc(calc(var(--ctY) * 2) + ${
      bounds.height / 2
    }px)`;

    return `radial-gradient(circle at ${circleGradientX} ${circleGradientY}, #ffffff30, #0000000f)`;
  }, [cardElement]);

  return (
    <>
      <CardRoot onMouseMove={moveDynamic} onMouseLeave={clearTransform}>
        <Card ref={setCardElement} bgColor={bgColor}>
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
  position: relative;
`;

const Card = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  font-weight: 800;
  border-radius: 15px;
  width: 300px;
  height: 500px;
  position: relative;
  box-shadow: "0px 24px 72px rgba(36, 42, 48, 0.3), inset 0px 0px 0px 1px rgba(0, 0, 0, 0.08)";
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
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  left: 0;
  top: 0;

  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
`;

const CardText = styled.span<{ types: CardTextType }>`
  color: white;
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
