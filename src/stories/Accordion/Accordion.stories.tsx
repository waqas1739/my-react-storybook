import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Accordion, { AccordionProps } from './Accordion';



export default {
  title: 'Components/Accordion',
  component: Accordion,
};

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Accordion Title',
  children: 'Accordion Content',
};
