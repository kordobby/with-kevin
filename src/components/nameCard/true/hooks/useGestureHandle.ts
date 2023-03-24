import { useMemo, useState } from "react";
import gsap from "gsap";

const useGestureHandle = () => {
  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);

  const moveDynamic: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (cardElement !== null) {
      const bounds = cardElement.getBoundingClientRect();

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;

      const cardX = leftX - bounds.width / 2;
      const cardY = topY - bounds.height / 2;

      const cardRotateX = cardY / 100;
      const cardRotateY = (-1 * cardX) / 100;

      cardElement.style.setProperty("--ctX", `${cardX}`);
      cardElement.style.setProperty("--ctY", `${cardY}`);

      gsap.to(cardElement, {
        scale: 1.07,
        rotateX: cardRotateX * 5,
        rotateY: cardRotateY * 5,
      });
    }
  };

  const clearTransform = () => {
    if (cardElement !== null) {
      cardElement.style.setProperty("--ctX", "0px");
      cardElement.style.setProperty("--ctY", "0px");

      gsap.to(cardElement, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
      });
    }
  };

  const glowEffect = useMemo(() => {
    if (cardElement == null) return;
    const bounds = cardElement.getBoundingClientRect();
    const circleGradientX = `calc(calc(var(--ctX) * 2) + ${
      bounds.width / 2
    }px)`;
    const circleGradientY = `calc(calc(var(--ctY) * 2) + ${
      bounds.height / 2
    }px)`;

    return `radial-gradient(circle at ${circleGradientX} ${circleGradientY}, #ffffff30, #0000000f)`;
  }, [cardElement]);

  return { moveDynamic, clearTransform, setCardElement, glowEffect };
};

export default useGestureHandle;
