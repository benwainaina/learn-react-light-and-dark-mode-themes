"use client";

import Image from "next/image";
import "./styles.scss";
import darkProfilePic from "../assets/dark-profile.png";
import lightProfilePic from "../assets/light-profile.png";
import { selectCurrentMode } from "../state-manager/selectors";
import { useSelector } from "react-redux";
import { IAppThemeMode } from "../state-manager/interfaces";
import { useEffect, useState } from "react";

export default function Profile() {
  /**
   * selectors
   */
  const currentMode = useSelector(selectCurrentMode);

  /**
   * states
   */
  const [mode, setMode] = useState<IAppThemeMode>("light");

  /**
   * effects
   */
  useEffect(() => {
    setMode(currentMode);
  }, [currentMode]);

  return (
    <div className={`profile-wrapper poppins-bold ${mode}`}>
      <h4>Welcome back</h4>
      <h1>benson</h1>
      <Image
        src={mode === "light" ? lightProfilePic : darkProfilePic}
        alt={`profile image ${mode}`}
      />
      <h3>You stop growing when you stop learning.</h3>
    </div>
  );
}
