import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TextArea, { TextAreaProps } from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Text Area",
  value: "",
  onChange: (value: string) => console.log(value),
  error: "",
  notification: "",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Text Area",
  value: "",
  onChange: (value: string) => console.log(value),
  error: "This field is required.",
  notification: "",
};

export const WithNotification = Template.bind({});
WithNotification.args = {
  label: "Text Area",
  value: "",
  onChange: (value: string) => console.log(value),
  error: "",
  notification: "Your changes have been saved.",
};
