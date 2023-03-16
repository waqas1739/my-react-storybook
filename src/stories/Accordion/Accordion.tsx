import React, { useState } from 'react';
import styled from 'styled-components';

export type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionContainer = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const AccordionHeader = styled.div`
  background-color: #f5f5f5;
  color: #555;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const AccordionContent = styled.div`
  padding: 10px;
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
`;

const AccordionIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        {title}
        <AccordionIcon isOpen={isOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </AccordionIcon>
      </AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionContainer>
  );
};

export default Accordion;
