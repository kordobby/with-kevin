import { useState, useEffect } from "react";
import styled from "styled-components";
import BG from "@/assets/black.svg";
import { LayoutCenteredWrapper, LayoutInnerWrapper, LayoutWrapper } from "./Layout.style";

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  return (
    <LayoutWrapper mousePos={mousePos}>
      <LayoutCenteredWrapper>
        <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
      </LayoutCenteredWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
