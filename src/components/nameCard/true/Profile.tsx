import { LayoutContext } from "@/components/layout/true/Layout";
import React from "react";
import { ReactNode } from "react";

const SIZE = 209;

const Profile = ({ children }: { children?: ReactNode }) => {
  const gradientValue = [
    ["23", "44", "78", "104"],
    [23, 43, 78, 130],
    [94, 88, 64, 23],
    [8, 35, 77, 150],
    [44, 23, 73, 104],
    // [44, 23, 73, 104],
  ];
  const gradientPallette = [
    ["#aa00ff", "#cf99ff", "#0033ff", "#0b006d"],
    ["#1c005e", "#00e5ff", "#0055ff", "#004379"],
    ["#ffd500", "#73ff00", "#e5ff00", "#00c274"],
    ["#c11db1", "#f2ff00", "#ff0099", "#ff98fa"],
    ["#f6ff00", "#fffb00", "#48ff00", "#00bfff"],
    // ["#e5ff00", "#ff0396", "#005eff", "#00ff8c"],
  ];
  return (
    <LayoutContext.Consumer>
      {(value) => (
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="myGradient"
              x1={gradientValue[`${value}`][0]}
              y1={gradientValue[`${value}`][1]}
              x2={gradientValue[`${value}`][2]}
              y2={gradientValue[`${value}`][3]}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="20%" stopColor={gradientPallette[`${value}`][0]} />
              <stop offset="35%" stopColor={gradientPallette[`${value}`][1]} />
              <stop offset="60%" stopColor={gradientPallette[`${value}`][2]} />
              <stop offset="90%" stopColor={gradientPallette[`${value}`][3]} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r="33" fill="url('#myGradient')" />
        </svg>
      )}
    </LayoutContext.Consumer>
  );
};

export default Profile;
