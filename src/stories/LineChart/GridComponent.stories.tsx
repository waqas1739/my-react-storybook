import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import GridComponent from "./GridComponent";

export default {
  title: "Components/GridComponent",
  component: GridComponent,
} as Meta;

const Template: Story = (args) => <GridComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
