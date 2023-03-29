import styled from "styled-components";
import { useState } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";

const NameCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const tiltEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const offsetX = -(rect.left + rect.width / 2 - e.clientX) / 3;
    const offsetY = (rect.top + rect.height / 2 - e.clientY) / 3;

    setRotateX(offsetY);
    setRotateY(offsetX);
  };

  const resetTiltEffect = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <CardContainer onMouseMove={tiltEffect} onMouseLeave={resetTiltEffect}>
      <Card rotateX={rotateX} rotateY={rotateY}>
        <CardShadow />
        <CardInner>
          <ProfileBox>
            <ProfilePic />
          </ProfileBox>
          <div className="flex-col">
            <CardTitle>케빈킴</CardTitle>
            <CardSubtitle>Dev</CardSubtitle>
            <div className="flex-row" style={{ marginTop: "30px" }}>
              <CardDesc>
                <VscGithubInverted size={20} />
                kevinkim910408
              </CardDesc>
            </div>
            <div className="flex-row">
              <CardDesc>
                <MdEmail size={20} />
                kjunho.dev@gmail.com
              </CardDesc>
            </div>
          </div>
        </CardInner>
      </Card>
    </CardContainer>
  );
};

export default NameCard;

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
  .flex-row {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
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
  background: red;
  border-radius: 100%;
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
