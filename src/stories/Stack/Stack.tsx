import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface StackProps {
  spacing: number;
  children: ReactNode;
}

const StackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StackItem = styled.div<{ spacing: number }>`
  margin-right: ${(props) => props.spacing}px;
  margin-bottom: ${(props) => props.spacing}px;

  &:last-child {
    margin-right: 0;
  }

  cursor: pointer;
`;

const Stack: FC<StackProps> = ({ children, spacing }) => {
  return (
    <StackContainer>
      {React.Children.map(children, (child, index) => (
        <StackItem key={index} spacing={spacing} onClick={() => console.log(`Clicked item ${index}`)}>
          {child}
        </StackItem>
      ))}
    </StackContainer>
  );
};

export default Stack;
