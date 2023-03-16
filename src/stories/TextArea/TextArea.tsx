import React, { ChangeEvent } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.hasError ? "red" : "#ccc")};
  border-radius: 0.25rem;
  resize: vertical;
`;

const Error = styled.span`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

const Notification = styled.span`
  color: green;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

export type TextAreaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  notification?: string;
};

const TextArea = ({
  label,
  value,
  onChange,
  error,
  notification,
}: TextAreaProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextArea
        value={value}
        onChange={handleInputChange}
        hasError={Boolean(error)}
      />
      {error && <Error>{error}</Error>}
      {notification && <Notification>{notification}</Notification>}
    </Container>
  );
};

export default TextArea;
