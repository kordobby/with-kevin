import TrueCardTemplate from "@/templates/true/NameCardTemplate";
import KevinNameCard from "@/templates/kevin/NameCardTemplate";
import { useCallback, useState } from "react";
import styled from "styled-components";

const NameCards = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);
  return (
    <>
      <ToggleBtn onClick={handleToggle}>
        {toggle ? "Check Kevin's" : "Check True's"}
      </ToggleBtn>
      {toggle ? <TrueCardTemplate /> : <KevinNameCard />}
    </>
  );
};

export default NameCards;

export const ToggleBtn = styled.button`
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 100;
`;
