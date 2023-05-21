import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import styled from "styled-components";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

// const TrueButton = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
//   return (
//     <Button
//       onClick={() => {
//         console.log("...");
//       }}
//     ></Button>
//   );
// });
const TrueButton = ({}) => {
  return (
    <Button
      onClick={() => {
        console.log("...");
      }}
    ></Button>
  );
};

export default TrueButton;

const Button = styled.button<IButtonProps>``;
