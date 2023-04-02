import { useState, useEffect } from "react";
import {
  LayoutCenteredWrapper,
  LayoutInnerWrapper,
  LayoutWrapper,
} from "./Layout.style";

interface LayoutInterface {
  children: React.ReactNode;
  light?: boolean;
}

const Layout = ({ children, light }: LayoutInterface) => {
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
    <>
      {light ? (
        <LayoutWrapper mousePos={mousePos}>
          <LayoutCenteredWrapper>
            <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
          </LayoutCenteredWrapper>
        </LayoutWrapper>
      ) : (
        <LayoutWrapper>
          <LayoutCenteredWrapper>
            <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
          </LayoutCenteredWrapper>
        </LayoutWrapper>
      )}
    </>
  );
};

export default Layout;
