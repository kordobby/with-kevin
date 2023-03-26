import { useState } from "react";
import { colors } from "../../../../utils/YoontilColors";

const useShuffleTheme = () => {
  const textPallette = ["#0080B9", "#FDC813", "#EC4E23", "#0B7526", "#5B5B5B"];
  const layoutPallette = [
    `linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)`,
    `linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)`,
    `linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)`,
    `linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)`,
    `linear-gradient(to top, #fddb92 0%, #d1fdff 100%)`,
  ];

  const [index, setIndex] = useState(0); // 4

  const shuffleColors = () => {
    setIndex((prev) => (prev + 1) % 5);
  };

  const bgColor = layoutPallette[`${index}`];

  return { shuffleColors, bgColor, index };
};

export default useShuffleTheme;
