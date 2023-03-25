import { useMemo, useState } from "react";
import gsap from "gsap";

const useGestureHandle = () => {
  const [cardElement, setCardElement] = useState<HTMLDivElement | null>(null);
  const [cardX, setCardX] = useState<number>(0);
  const [cardY, setCardY] = useState<number>(0);
  const [mousePointer, setMousePointer] = useState<{
    mousePointerX: number;
    mousePointerY: number;
  }>({
    mousePointerX: 0,
    mousePointerY: 0,
  });

  const moveDynamic: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (cardElement !== null) {
      const bounds = cardElement.getBoundingClientRect();
      const mousePointerX = event.clientX;
      const mousePointerY = event.clientY;

      setMousePointer({
        mousePointerX,
        mousePointerY,
      });

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

  const hologramEffect = useMemo(() => {
    const { mousePointerX, mousePointerY } = mousePointer;

    const degreeX = 90 - (mousePointerX * 45) / document.body.clientWidth / 2;
    const degreeY = 90 - (mousePointerY * 45) / document.body.clientHeight / 4;

    const resultX = 40 - degreeY * 5;
    const resultY = 5 + degreeX;
    return `url("https://assets.codepen.io/13471/sparkles.gif"),
    repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(5% * 1),
      rgba(255, 237, 95, 1) calc(5% * 2),
      rgba(168, 255, 95, 1) calc(5% * 3),
      rgba(131, 255, 247, 1) calc(5% * 4),
      rgba(120, 148, 155, 1) calc(5% * 5),
      rgb(216, 117, 255) calc(5% * 6),
      rgba(255, 119, 115) calc(5% * 7)
    ),
    repeating-linear-gradient(
      145deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 29%, 66%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ),
    radial-gradient(
      farthest-corner circle at ${resultX}% ${resultY}%,
      rgba(0, 0, 0, 0.1) 12%,
      rgba(0, 0, 0, 0.25) 120%
    )`;
  }, [cardElement, cardX, cardY]);

  const hologramPosition = useMemo(() => {
    const { mousePointerX, mousePointerY } = mousePointer;

    const degreeX = 90 - (mousePointerX * 45) / document.body.clientWidth / 2;
    const degreeY = 90 - (mousePointerY * 45) / document.body.clientHeight / 4;

    const positionX = `${50 + degreeX / 10 + degreeY}`;
    const positionY = `${50 + degreeY / 10 + degreeX / 10}%`;

    return `center center, 0% ${positionY}, ${positionX} ${positionY}, ${positionX} ${positionY}`;
  }, [cardElement, cardX, cardY]);

  const hologramFilter = useMemo(() => {
    const { mousePointerX, mousePointerY } = mousePointer;
    const result = Math.min(
      Math.max(
        Math.sqrt(
          (mousePointerX - 50) * (mousePointerX - 50) +
            (mousePointerY - 50) * (mousePointerY - 50)
        ) / 50,
        0
      ),
      1
    ).toString();

    return `brightness(calc((${result} * 0.3) + 0.5)) contrast(2) saturate(1.5)`;
  }, [cardElement, cardX, cardY]);

  return {
    moveDynamic,
    clearTransform,
    setCardElement,
    glowEffect,
    hologramEffect,
    hologramPosition,
    hologramFilter,
  };
};

export default useGestureHandle;
