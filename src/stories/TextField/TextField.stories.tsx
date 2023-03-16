import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TextField, { TextFieldProps } from "./TextField";

export default {
  title: "Components/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Text Field",
  value: "",
  onChange: (value: string) => console.log(value),
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Text Field",
  value: "",
  onChange: (value: string) => console.log(value),
  error: "This field is required",
};

export const WithNotification = Template.bind({});
WithNotification.args = {
  label: "Text Field",
  value: "",
  onChange: (value: string) => console.log(value),
  notification: "Field updated successfully",
};
