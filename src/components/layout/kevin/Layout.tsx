import { FC, ReactNode } from "react";
import styled from "styled-components";
import {
  LayoutCenteredWrapper,
  LayoutChildrenWrapper,
  LayoutInnerWrapper,
  LayoutWrapper,
} from "./Layout.style";

interface LayoutInterface {
  children: ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutCenteredWrapper>
        <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
      </LayoutCenteredWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
