import type { Meta, StoryObj } from "@storybook/react";

import Button from "./index";
import type { ButtonProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const meta = {
  title: "Components/Atoms/Button",
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Button>Default</Button>;
  },
};

export const Primary: Story = {
  render: () => {
    return <Button type={"primary"}>Primary</Button>;
  },
};

export const Icon: Story = {
  render: () => {
    return <Button icon={<PlusOutlined />}>Icon</Button>;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Button disabled>Disabled</Button>;
  },
};
