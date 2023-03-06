import React, { useState } from "react";
import styles from "./ToggleSwitch.module.css";

interface ToggleSwitchProps {
  label: string;
  onChange: (isChecked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div className={styles["toggle-switch-container"]}>
      <label className={styles["toggle-switch-label"]} htmlFor="toggle-switch">
        {label}
      </label>
      <input
        id="toggle-switch"
        className={styles["toggle-switch-input"]}
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
    </div>
  );
};

export default ToggleSwitch;
export type { ToggleSwitchProps };

