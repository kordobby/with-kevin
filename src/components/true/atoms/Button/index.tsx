import { FC, HTMLProps } from "react";
import { ButtonLayout, ButtonLayoutProps } from "./Button.styles";
import { createContext, useContext } from "react";

interface ButtonContextProps {
  size: "lg" | "sm" | "md";
  icon: React.ReactNode;
}
const ButtonContext = createContext<ButtonContextProps>({
  size: "lg",
  icon: null,
});
export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <ButtonContext.Provider value={{ size: "lg", icon: null }}>
      <ButtonLayout buttonType="primary" onClick={onClick}>
        <ButtonIconSlot />
        <span>{children}</span>
      </ButtonLayout>
    </ButtonContext.Provider>
  );
};

const ButtonIconSlot = () => {
  const { icon } = useContext(ButtonContext);

  if (!icon) return null;
  return <>{icon}</>;
};

export default Button;
