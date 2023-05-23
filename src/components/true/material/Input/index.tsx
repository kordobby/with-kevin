import {
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

export interface inputRefInterface extends HTMLInputElement {
  focusInput: () => void;
  getValue: () => void;
}
export const ParentComponent = () => {
  const parentRef = useRef<inputRefInterface>(null);

  const handleFocus = () => {
    parentRef?.current?.focusInput();
  };

  const handleGetValue = () => {
    parentRef?.current?.getValue();
  };
  return (
    <div>
      <ChildComponent ref={parentRef} />
      <button onClick={handleFocus}>focus!</button>
      <button onClick={handleGetValue}>get value!</button>
    </div>
  );
};

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const ChildComponent = forwardRef<inputRefInterface, IInputProps>(
  (props, ref) => {
    const [state, setState] = useState<string>("");
    const childRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      ref,
      () =>
        ({
          focusInput: () => childRef?.current?.focus(),
          getValue: () => alert(state),
        } as inputRefInterface)
    );

    return (
      <>
        <input
          onChange={(e) => setState(e.target.value)}
          placeholder="연습중"
          type="text"
          ref={childRef}
          value={state}
        ></input>
      </>
    );
  }
);

/*
    useImperativeHandle(
      ref,
      () =>
        ({
          focusInput: () => childRef?.current?.focus(),
          getValue: () => alert(state),
        } as inputRefInterface)
    );
*/
const StInput = styled.input`
  height: 50px;
`;
