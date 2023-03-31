import { useState, MouseEvent } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import * as style from "./NameCard.style";
import { MdEmojiPeople } from "react-icons/md";

const NameCard = () => {
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isTilted, setIsTilted] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("#fff");
  const [lastColor, setLastColor] = useState<string>("");

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
    const colors = [
      "#FF5733",
      "#DAF7A6",
      "#FFC300",
      "#F4D03F",
      "#AED6F1",
      "#E74C3C",
      "#3498DB",
      "#9B59B6",
      "#D35400",
      "#00B16A",
      "#F7DC6F",
      "#1ABC9C",
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];

    while (color === lastColor) {
      color = colors[Math.floor(Math.random() * colors.length)];
    }

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
        <style.Card rotateX={rotateX} rotateY={rotateY}>
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
                <style.ProfilePic bgColor={bgColor} />
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
