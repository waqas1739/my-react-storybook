import React from 'react';
import { Story, Meta } from '@storybook/react';
import Alert, { AlertProps } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'danger'],
      },
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success alert',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning alert',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  message: 'This is a danger alert',
};
