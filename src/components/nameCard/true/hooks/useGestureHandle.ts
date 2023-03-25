import { useMemo, useState } from "react";
import gsap from "gsap";

const useGestureHandle = () => {
  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);
  const [cardX, setCardX] = useState<number>(0);
  const [cardY, setCardY] = useState<number>(0);
  const moveDynamic: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (cardElement !== null) {
      const bounds = cardElement.getBoundingClientRect();
      const mousePointerX = event.clientX;
      const mousePointerY = event.clientY;
      const leftX = mousePointerX - bounds.x;
      const topY = mousePointerY - bounds.y;
      const cardX = leftX - bounds.width / 2; // (-139 ~ 139)
      const cardY = topY - bounds.height / 2; // (-240 ~ 240)
      const cardRotateX = (cardX * -1) / 100;
      const cardRotateY = cardY / 100;

      setCardX(cardX);
      setCardY(cardY);
      gsap.to(cardElement, {
        scale: 1.05,
        rotateX: cardRotateY * 5,
        rotateY: cardRotateX * 5,
      });
    }
  };

  const clearTransform = () => {
    if (cardElement !== null) {
      gsap.to(cardElement, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
      });
      setCardX(0);
      setCardY(0);
    }
  };

  const glowEffect = useMemo(() => {
    if (cardElement == null) return;
    const bounds = cardElement.getBoundingClientRect();
    const gradientX = cardX * 2 + bounds.width / 2;
    const gradientY = cardY * 2 + bounds.height / 2;

    return `radial-gradient(circle at ${gradientX}px ${gradientY}px, #ffffff30, #0000000f)`;
  }, [cardElement, cardX, cardY]);

  return {
    moveDynamic,
    clearTransform,
    setCardElement,
    glowEffect,
  };
};

export default useGestureHandle;
