import React, { useState } from 'react';
import styled from 'styled-components';

export type AlertProps = {
  type: 'success' | 'warning' | 'danger';
  message: string;
  onClose?: () => void;
};

const AlertContainer = styled.div`
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  position: relative;

  &.success {
    background-color: #d1e7dd;
    color: #155724;
    border-color: #c3e6cb;
  }

  &.warning {
    background-color: #fff3cd;
    color: #856404;
    border-color: #ffeeba;
  }

  &.danger {
    background-color: #f8d7da;
    color: #721c24;
    border-color: #f5c6cb;
  }

  & .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    color: #6c757d;
  }
`;

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose && onClose();
  };

  return visible ? (
    <AlertContainer className={`alert ${type}`}>
      <span className="close-button" onClick={handleClose}>
        &times;
      </span>
      {message}
    </AlertContainer>
  ) : null;
};

export default Alert;
