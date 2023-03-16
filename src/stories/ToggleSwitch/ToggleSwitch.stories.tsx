import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ToggleSwitch, { ToggleSwitchProps } from "./ToggleSwitch";

export default {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Toggle Switch",
  onChange: (isChecked) => console.log(isChecked),
};
