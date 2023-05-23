import Input, {
  IInputProps,
  ParentComponent,
} from "@/components/true/material/Input";
import TrueButton from "@/components/true/material/TrueButton";
import { useRef } from "react";

const PageTest = () => {
  return (
    <>
      <TrueButton theme="primary">버튼</TrueButton>
      <ParentComponent />
    </>
  );
};

export default PageTest;
