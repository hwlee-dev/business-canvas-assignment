import Table from "@/components/organisms/Table/index";
import type { Meta, StoryObj } from "@storybook/react";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Cash Assets",
    className: "column-money",
    dataIndex: "money",
    align: "right",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sydney No. 1 Lake Park",
  },
];

const meta = {
  title: "Components/Table",
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Table<DataType>
        title={() => "테이블"}
        dataSource={data}
        columns={columns}
      />
    );
  },
};
