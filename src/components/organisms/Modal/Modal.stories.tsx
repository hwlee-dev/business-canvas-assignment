import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./index";
import type { ModalProps } from "antd";
import { useState } from "react";
import Button from "@/components/atoms/Button";

const meta = {
  title: "Components/Organisms/Modal",
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTemplate = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>열기</Button>
      <Modal
        open={open}
        title={<div>모달 제목</div>}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
      >
        Contents
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <DefaultTemplate />,
};
