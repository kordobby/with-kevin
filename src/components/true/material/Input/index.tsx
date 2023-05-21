import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import styled from "styled-components";

export interface IButtonProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, IButtonProps>((props, ref) => {
  return (
    <>
      <input placeholder="연습중" type="text" ref={ref}></input>
    </>
  );
});

export default Input;
