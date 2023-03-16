import React from 'react';
import { Meta, Story } from '@storybook/react';
import Stack, { StackProps } from './Stack';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    spacing: { control: 'number', defaultValue: 8 },
  },
} as Meta;

const Template: Story<StackProps> = (args) => (
  <Stack {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const Default = Template.bind({});
