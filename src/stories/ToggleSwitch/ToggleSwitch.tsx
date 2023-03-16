import React, { useState } from "react";
import styled from "styled-components";

interface ToggleSwitchProps {
  label: string;
  onChange: (isChecked: boolean) => void;
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.label`
  margin-right: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  position: relative;
  width: 50px;
  height: 24px;
  appearance: none;
  background: #ddd;
  outline: none;
  border-radius: 24px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }

  &:checked {
    background: #3f51b5;

    &::before {
      transform: translateX(26px);
    }
  }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <Container>
      <Label htmlFor="toggle-switch">{label}</Label>
      <Input
        id="toggle-switch"
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
    </Container>
  );
};

export default ToggleSwitch;
export type { ToggleSwitchProps };
