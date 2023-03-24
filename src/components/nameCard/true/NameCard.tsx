import styled, { css } from "styled-components";
import useShuffleTheme from "./hooks/useShuffleTheme";
import useGestureHandle from "./hooks/useGestureHandle";

type CardTextType = "name" | "email" | "date";

const NameCard = () => {
  const { shuffleColors, bgColor } = useShuffleTheme();
  const { moveDynamic, clearTransform, setCardElement, glowEffect } =
    useGestureHandle();

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
