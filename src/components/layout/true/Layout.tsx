import useShuffleTheme from "@/components/nameCard/true/hooks/useShuffleTheme";
import { FC, ReactNode } from "react";
import { createContext } from "react";
import styled from "styled-components";
import {
  LayoutCenteredWrapper,
  LayoutInnerWrapper,
  LayoutWrapper,
} from "./Layout.style";

interface LayoutInterface {
  children: ReactNode;
}

export const LayoutContext = createContext(0);

const Layout: FC<LayoutInterface> = ({ children }) => {
  const { index, shuffleColors, bgColor } = useShuffleTheme();
  return (
    <LayoutWrapper style={{ backgroundImage: `${bgColor}` }}>
      <LayoutCenteredWrapper>
        <LayoutInnerWrapper>
          <LayoutContext.Provider value={index}>
            {children}
          </LayoutContext.Provider>
        </LayoutInnerWrapper>
        <ShuffleButton onClick={shuffleColors}>Shuffle</ShuffleButton>
      </LayoutCenteredWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

const ShuffleButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  outline: none;
`;
