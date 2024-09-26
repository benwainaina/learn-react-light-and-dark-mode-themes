"use client";

import { useSelector } from "react-redux";
import "./styles.scss";
import { selectCurrentMode } from "../state-manager/selectors";
import { useEffect, useState } from "react";
import { IAppThemeMode } from "../state-manager/interfaces";

export default function Home() {
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
    <div className={`wrapper ${mode}`}>
      <h1 className="poppins-bold">Home</h1>
      <p className="poppins-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
        aliquam quaerat voluptas sequi ratione obcaecati. Esse veniam
        perferendis sint necessitatibus ipsum quia deleniti ex labore architecto
        explicabo, nemo fugit.
      </p>
      <p className="poppins-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse
        aliquam quaerat voluptas sequi ratione obcaecati. Esse veniam
        perferendis sint necessitatibus ipsum quia deleniti ex labore architecto
        explicabo, nemo fugit.
      </p>

      <div className="go-to-profile poppins-bold">Hover To See The Effect</div>
    </div>
  );
}
