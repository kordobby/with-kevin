import React from "react";
import { ReactNode } from "react";

const SIZE = 209;

const Profile = ({ children }: { children?: ReactNode }) => {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="myGradient"
          x1="44"
          y1="23"
          x2="73"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#e5ff00" />
          <stop offset="25%" stopColor="#ff0396" />
          <stop offset="50%" stopColor="#005eff" />
          <stop offset="75%" stopColor="#00ff8c" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="33" fill="url('#myGradient')" />
    </svg>
  );
};

export default Profile;
