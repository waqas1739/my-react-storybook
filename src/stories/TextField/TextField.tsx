import React, { ChangeEvent } from "react";
import styled from "styled-components";

export type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  notification?: string;
};

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled.input<{ error?: string; notification?: string }>`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${({ error, notification }) => (error ? "red" : notification ? "green" : "#ccc")};
  border-radius: 0.25rem;
  color: ${({ error }) => (error ? "red" : "inherit")};
  font-size: inherit;
  line-height: 1.5;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ error, notification }) => (error ? "red" : notification ? "green" : "blue")};
  }
`;

const StyledError = styled.span`
  display: block;
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const StyledNotification = styled.span`
  display: block;
  color: green;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const TextField = ({ label, value, onChange, error, notification }: TextFieldProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="text" value={value} onChange={handleInputChange} error={error} notification={notification} />
      {error && <StyledError>{error}</StyledError>}
      {notification && <StyledNotification>{notification}</StyledNotification>}
      
    </div>
  );
};

export default TextField;
