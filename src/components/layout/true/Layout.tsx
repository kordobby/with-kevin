import { FC, ReactNode } from "react";
import styled from "styled-components";
import { LayoutWrapper } from "./Layout.style";

interface LayoutInterface {
  children: ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
