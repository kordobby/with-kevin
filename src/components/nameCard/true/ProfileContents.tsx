import Layout, { LayoutContext } from "@/components/layout/true/Layout";
import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type CardTextType = "name" | "email" | "github";

interface ProfileContentsProps {
  types: CardTextType;
  icon?: ReactNode;
  children: string;
}

const ProfileContents: FC<ProfileContentsProps> = ({
  types,
  icon,
  children,
}) => {
  const textPalette = ["#4650de", "#0073ff", "#00bd91", "#ff5da9", "#98cb00"];
  //   const textPalette = ["#4650de", "black", "white", "black", "white"];

  return (
    <>
      <LayoutContext.Consumer>
        {(value) => (
          <ProfileContentsWrapper
            types={types}
            textColor={textPalette[`${value}`]}
          >
            {icon}
            <ProfileContentsText icon={Boolean(icon)}>
              {children}
            </ProfileContentsText>
          </ProfileContentsWrapper>
        )}
      </LayoutContext.Consumer>
    </>
  );
};

export default ProfileContents;

const ProfileContentsWrapper = styled.div<{
  types: CardTextType;
  textColor?: string;
}>`
  display: flex;
  align-items: center;
  color: ${({ textColor }) => textColor ?? "white"};

  /* color: #4650de; */
  ${({ types }) => {
    switch (types) {
      case "name":
        return css`
          font-weight: 800;
          margin-top: 10px;
          font-size: 28px;
        `;
      case "email":
        return css`
          font-weight: 500;
          font-size: 18px;
          margin-top: 0px;
          margin-bottom: 38px;
          font-weight: 600;
        `;
      case "github":
        return css`
          font-size: 14px;
          margin-top: 4px;
          font-weight: 600;
        `;
      default:
        return css``;
    }
  }}
  span {
    margin-left: 5px;
  }
`;

const ProfileContentsText = styled.span<{ icon: boolean }>`
  margin-left: ${({ icon }) => (icon ? "10" : "0")}px;
`;
