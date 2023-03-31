import { useState, MouseEvent } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import * as style from "./NameCard.style";
import { MdEmojiPeople } from "react-icons/md";

const colors = [
  "#FF5733",
  "#DAF7A6",
  "#FFC300",
  "#AED6F1",
  "#3498DB",
  "#9B59B6",
  "#1ABC9C",
];
const gradients = [
  "linear-gradient(to bottom left, #FF5733, #FF8D33, #DAF7A6, #C5FFA6, #FFC300, #FFE433, #AED6F1, #9BBFF1, #3498DB)",
  "linear-gradient(to bottom left, #DAF7A6, #D0F7A6, #FFC300, #FFE433, #AED6F1, #B6C8F1, #3498DB, #4D4DD1, #9B59B6)",
  "linear-gradient(to bottom left, #FFC300, #FFE433, #AED6F1, #B6C8F1, #3498DB, #3A68E7, #9B59B6, #D459A2, #EC7063)",
  "linear-gradient(to bottom left, #AED6F1, #B6C8F1, #3498DB, #3A68E7, #9B59B6, #C259B6, #FF5733, #FF5B5E, #F1948A)",
  "linear-gradient(to bottom left, #3498DB, #3A68E7, #9B59B6, #C259B6, #FF5733, #FF334B, #FF8D33, #FFA333, #FFC300)",
  "linear-gradient(to bottom left, #9B59B6, #C259B6, #FF5733, #FF334B, #FF8D33, #FF5733, #1ABC9C, #33FFA3, #70FFC2)",
];

const NameCard = () => {
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isTilted, setIsTilted] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("#fff");
  const [lastColor, setLastColor] = useState<string>("");
  const [profileColor, setProfileColor] = useState<string>(gradients[1]);

  const tiltEffect = (e: MouseEvent<HTMLDivElement>): void => {
    setIsTilted(true);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const offsetX = (rect.left + rect.width / 2 - e.clientX) / 10;
    const offsetY = -(rect.top + rect.height / 2 - e.clientY) / 10;
    setRotateX(offsetY);
    setRotateY(offsetX);
  };

  const resetTiltEffect = (): void => {
    setIsTilted(false);
    setRotateX(0);
    setRotateY(0);
  };

  const getRandomColor = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let gradient = gradients[Math.floor(Math.random() * gradients.length)];

    while (color === lastColor) {
      color = colors[Math.floor(Math.random() * colors.length)];
    }
    while (gradient === profileColor) {
      gradient = gradients[Math.floor(Math.random() * colors.length)];
    }
    setProfileColor(gradient);
    setLastColor(color);
    return color;
  };

  const profileColorChange = () => {
    setBgColor(getRandomColor());
  };

  return (
    <style.Wrapper>
      <button onClick={profileColorChange}>Click Me!</button>
      <style.CardContainer
        onMouseMove={tiltEffect}
        onMouseLeave={resetTiltEffect}
      >
        <style.Card rotateX={rotateX} rotateY={rotateY} bgColor={bgColor}>
          <style.CardShadow />
          <style.CardInner isTilted={isTilted} bgColor={bgColor}>
            <div className="card__Inner-BorderBox">
              <MdEmojiPeople
                size={80}
                color={bgColor}
                className="icon mainIcon"
              />
            </div>
            <div className="card__Inner-HideBox">
              <style.ProfileBox>
                <style.ProfilePic
                  bgColor={profileColor}
                  rotateX={rotateX}
                  rotateY={rotateY}
                />
              </style.ProfileBox>
              <div className="flex-col">
                <style.TitleWrapper types="main" bgColor={bgColor}>
                  케빈킴
                </style.TitleWrapper>
                <style.TitleWrapper types="sub" bgColor={bgColor}>
                  Dev
                </style.TitleWrapper>
                <div className="icon" style={{ marginTop: "30px" }}>
                  <style.TitleWrapper types="desc" bgColor={bgColor}>
                    <VscGithubInverted size={20} />
                    kevinkim910408
                  </style.TitleWrapper>
                </div>
                <div className="icon">
                  <style.TitleWrapper types="desc" bgColor={bgColor}>
                    <MdEmail size={20} />
                    kjunho.dev@gmail.com
                  </style.TitleWrapper>
                </div>
              </div>
            </div>
          </style.CardInner>
        </style.Card>
      </style.CardContainer>
    </style.Wrapper>
  );
};

export default NameCard;
