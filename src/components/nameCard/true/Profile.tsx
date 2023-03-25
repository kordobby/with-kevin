import React from "react";
import { ReactNode } from "react";

const SIZE = 209;

const Profile = ({ children }: { children?: ReactNode }) => {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient
          id="myGradient"
          x1="44"
          y1="23"
          x2="73"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="20%" stopColor="#e5ff00" />
          <stop offset="35%" stopColor="#ff0396" />
          <stop offset="60%" stopColor="#005eff" />
          <stop offset="90%" stopColor="#00ff8c" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="33" fill="url('#myGradient')" />
    </svg>
  );
};

export default Profile;
