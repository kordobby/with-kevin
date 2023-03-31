import { useState, MouseEvent } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail, MdEmojiPeople } from "react-icons/md";
import { colors, gradients } from "./Colors";
import * as style from "./NameCard.style";

const NameCard = () => {
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isTilted, setIsTilted] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("#fff");
  const [lastColor, setLastColor] = useState<string>("");
  const [profileColor, setProfileColor] = useState<string>(gradients[1]);

  const tiltEffect = (e: MouseEvent<HTMLDivElement>): void => {
    setIsTilted(true);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    setTilt({
      x: (rect.left + rect.width / 2 - e.clientX) / 10,
      y: (rect.top + rect.height / 2 - e.clientY) / 10,
    });
  };

  const resetTiltEffect = (): void => {
    setIsTilted(false);
    setTilt({
      x: 0,
      y: 0,
    });
  };

  const getRandomIndex = (length: number, exclude: number): number => {
    let index = Math.floor(Math.random() * length);
    while (index === exclude) {
      index = Math.floor(Math.random() * length);
    }
    return index;
  };

  const getRandomColor = () => {
    const colorIndex = getRandomIndex(colors.length, colors.indexOf(lastColor));
    const gradientIndex = getRandomIndex(
      gradients.length,
      gradients.indexOf(profileColor)
    );
    const color = colors[colorIndex];
    const gradient = gradients[gradientIndex];
    setLastColor(color);
    setProfileColor(gradient);
    return color;
  };

  const colorChange = () => {
    setBgColor(getRandomColor());
  };

  return (
    <style.Wrapper>
      <button onClick={colorChange}>Click Me!</button>
      <style.CardContainer
        onMouseMove={tiltEffect}
        onMouseLeave={resetTiltEffect}
      >
        <style.Card rotateX={tilt.x} rotateY={tilt.y} bgColor={bgColor}>
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
                  rotateX={tilt.x}
                  rotateY={tilt.y}
                />
              </style.ProfileBox>
              <div className="flex-col">
                <style.TitleWrapper types="main" bgColor={bgColor}>
                  케빈킴
                </style.TitleWrapper>
                <style.TitleWrapper types="sub" bgColor={bgColor}>
                  Developer
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
