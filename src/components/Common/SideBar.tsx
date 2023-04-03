import { CommonColors } from "@/utils/Common";
import React, { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <>
      <SideBarBtn onClick={handleToggle}>O</SideBarBtn>
      {toggle && (
        <HeaderWrapper toggle={toggle}>
          <button className="close" onClick={handleToggle}>
            X
          </button>
        </HeaderWrapper>
      )}
    </>
  );
};

export default SideBar;

export const fadeIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const SideBarBtn = styled.button`
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 100;
`;

export const HeaderWrapper = styled.div<{ toggle: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: ${CommonColors.HEADER_BG};
  z-index: 9999;
  animation: ${(props) => props.toggle && fadeIn} 0.5s ease-in forwards;
  .close {
    position: absolute;
    top: 2%;
    right: 5%;
  }
`;
