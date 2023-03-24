import { useState } from "react";
import { colors } from "../../../../utils/YoontilColors";

const useShuffleTheme = () => {
  const pallette = ["#0080B9", "#FDC813", "#EC4E23", "#0B7526", "#5B5B5B"];
  const [index, setIndex] = useState(0); // 4

  const shuffleColors = () => {
    setIndex((prev) => (prev + 1) % 5);
  };

  const bgColor = pallette[`${index}`];

  return { shuffleColors, bgColor };
};

export default useShuffleTheme;
