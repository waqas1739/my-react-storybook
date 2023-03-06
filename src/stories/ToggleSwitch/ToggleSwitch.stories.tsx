import React from "react";
import { Meta, Story } from "@storybook/react";
import ToggleSwitch, { ToggleSwitchProps } from "./ToggleSwitch";

export default {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Toggle me",
  onChange: (isChecked) => console.log(`Toggle switch is now ${isChecked}`),
};
