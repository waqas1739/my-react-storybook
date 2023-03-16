import React, { useState } from 'react';
import styled from 'styled-components';

export type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AccordionHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 10px;
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
      </AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionContainer>
  );
};

export default Accordion;
