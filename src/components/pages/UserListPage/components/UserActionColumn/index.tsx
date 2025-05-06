import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";

export type Action = "MODIFY" | "DELETE";
interface Props {
  onClick?: (action: Action) => void;
}

const UserActionColumn: React.FC<Props> = ({ onClick }) => {
  const actions: MenuProps["items"] = [
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

  const handleClickMenu = ({ key: action }: any) => {
    onClick?.(action);
  };

  return (
    <Dropdown
      menu={{
        items: actions,
        onClick: handleClickMenu,
      }}
      trigger={["click"]}
      placement={"bottomRight"}
      overlayStyle={{ width: 185 }}
    >
      <Button type={"text"} icon={<MoreOutlined />} />
    </Dropdown>
  );
};

export default UserActionColumn;
