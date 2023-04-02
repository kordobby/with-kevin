import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%);
  }
  to {
    opacity: 0;
    transform: translateY(10%);
  }
`;

export const CardInnerBoxAnimation = keyframes`
  from {
    width: 50%;
    height: 50%;
  
  }
  to {
    width: 80%;
    height: 90%;
    
  }
`;

export const CardInnerBoxAnimationOpposite = keyframes`
  from {
    width: 80%;
    height: 90%;
  }
  to {
    width: 50%;
    height: 50%;
  }
`;
