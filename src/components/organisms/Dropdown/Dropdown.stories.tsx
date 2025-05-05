import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./index";
import { MenuProps, ModalProps } from "antd";
import Button from "@/components/atoms/Button";

const meta = {
  title: "Components/Organisms/Dropdown",
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTemplate = () => {
  const items: MenuProps["items"] = [
    {
      label: "수정",
      key: "MODIFY",
    },
    {
      type: "divider",
    },
    {
      label: "삭제",
      key: "DELETE",
      danger: true,
    },
  ];

  return (
    <>
      <Dropdown
        items={items}
        trigger={["click"]}
        placement={"bottomRight"}
        overlayStyle={{ width: 185, top: 59 }}
      >
        <Button>열기</Button>
      </Dropdown>
    </>
  );
};

export const Default: Story = {
  render: () => <DefaultTemplate />,
};
