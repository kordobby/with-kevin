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
  return (
    <ProfileContentsWrapper types={types}>
      {icon}
      <ProfileContentsText icon={Boolean(icon)}>{children}</ProfileContentsText>
    </ProfileContentsWrapper>
  );
};

export default ProfileContents;

const ProfileContentsWrapper = styled.div<{ types: CardTextType }>`
  display: flex;
  align-items: center;
  color: #6870d8;
  ${({ types }) => {
    switch (types) {
      case "name":
        return css`
          font-weight: 800;
          font-size: 26px;
        `;
      case "email":
        return css`
          font-weight: 500;
          font-size: 16px;
          margin-top: 8px;
        `;
      case "github":
        return css`
          font-size: 12px;
          margin-top: 8px;
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
