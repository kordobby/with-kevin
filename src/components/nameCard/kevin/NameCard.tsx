import { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import * as style from "./NameCard.style";
import { MdEmojiPeople } from "react-icons/md";

const NameCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const tiltEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const offsetX = -(rect.left + rect.width / 2 - e.clientX) / 20;
    const offsetY = (rect.top + rect.height / 2 - e.clientY) / 20;
    setRotateX(offsetY);
    setRotateY(offsetX);
  };

  const resetTiltEffect = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <style.CardContainer
      onMouseMove={tiltEffect}
      onMouseLeave={resetTiltEffect}
    >
      <style.Card rotateX={rotateX} rotateY={rotateY}>
        <style.CardShadow />
        <style.CardInner>
          <div className="card__Inner-BorderBox">
            <MdEmojiPeople size={80} color="white" className="icon" />
          </div>
          <div className="card__Inner-HideBox">
            <style.ProfileBox>
              <style.ProfilePic />
            </style.ProfileBox>
            <div className="flex-col">
              <style.CardTitle>케빈킴</style.CardTitle>
              <style.CardSubtitle>Dev</style.CardSubtitle>
              <div className="icon" style={{ marginTop: "30px" }}>
                <style.CardDesc>
                  <VscGithubInverted size={20} />
                  kevinkim910408
                </style.CardDesc>
              </div>
              <div className="icon">
                <style.CardDesc>
                  <MdEmail size={20} />
                  kjunho.dev@gmail.com
                </style.CardDesc>
              </div>
            </div>
          </div>
        </style.CardInner>
      </style.Card>
    </style.CardContainer>
  );
};

export default NameCard;
