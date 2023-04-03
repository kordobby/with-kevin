import { useCallback } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

interface IProps {
  trueComponent: React.ReactNode;
  kevinComponent: React.ReactNode;
}

const PageTemplate = ({ trueComponent, kevinComponent }: IProps) => {
  const { member } = useParams();
  const navigate = useNavigate();
  const param = document.location.pathname.split("/");

  const handleToggle = useCallback(() => {
    if (member === "true") {
      navigate(`/${param[1]}/kevin`);
    } else {
      navigate(`/${param[1]}/true`);
    }
  }, [member, history]);

  return (
    <>
      <ToggleBtn onClick={handleToggle}>
        {member === "true" ? "Check Kevin's" : "Check True's"}
      </ToggleBtn>
      {member === "true" ? trueComponent : kevinComponent}
    </>
  );
};

export default PageTemplate;

export const ToggleBtn = styled.button`
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 100;
`;
