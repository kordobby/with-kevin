import { FC, HTMLProps, ReactNode } from "react";
import {
  ButtonLayout,
  ButtonLayoutProps,
  ButtonShape,
  ButtonSize,
} from "./Button.styles";
import { createContext, useContext } from "react";

interface ButtonContextProps {
  size: ButtonSize;
}
const ButtonContext = createContext<ButtonContextProps>({
  size: "large",
});

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {
  icon?: React.ReactNode;
  buttonSize: ButtonSize;
  shape?: ButtonShape;
}

export const PrimitiveButton: FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  theme,
  color,
  buttonSize,
  shape,
}) => {
  return (
    <ButtonContext.Provider value={{ size: buttonSize }}>
      <ButtonLayout theme={theme} onClick={onClick} color={color} shape={shape}>
        {icon && <ButtonIconSlot icon={icon} />}
        <span>{children}</span>
      </ButtonLayout>
    </ButtonContext.Provider>
  );
};

const ButtonIconSlot = ({ icon }: { icon: ReactNode }) => {
  return <div>{icon}</div>;
};

const PrimaryButton: FC<ButtonProps> = ({ buttonSize }) => {
  return <PrimitiveButton theme="primary" buttonSize={buttonSize} />;
};

const GhostButton: FC<ButtonProps> = ({ buttonSize }) => {
  return <PrimitiveButton theme="ghost" buttonSize={buttonSize} />;
};

const LinkButton: FC<ButtonProps> = ({ buttonSize }) => {
  return <PrimitiveButton theme="link" buttonSize={buttonSize} />;
};

const IconButton: FC<ButtonProps> = ({ buttonSize }) => {
  return (
    <PrimitiveButton theme="icon" buttonSize={buttonSize} shape={"round"} />
  );
};

const Primary = PrimaryButton;
const Ghost = GhostButton;
const Link = LinkButton;
const Icon = IconButton;

const Button = { Primary, Ghost, Link, Icon };
export default Button;
