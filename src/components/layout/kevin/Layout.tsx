import styled from "styled-components";
import BG from "@/assets/black.svg";

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <LayoutWrapper>
      <LayoutCenteredWrapper>
        <LayoutInnerWrapper>{children}</LayoutInnerWrapper>
      </LayoutCenteredWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

export const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const LayoutCenteredWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 560px) {
    width: 780px;
  }
`;

export const LayoutInnerWrapper = styled.div`
  height: 100vh;
`;
