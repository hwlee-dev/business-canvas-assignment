import UserActionColumn, {
  Action,
} from "@/components/pages/UserListPage/components/UserActionColumn";
import UserFormModal from "@/components/pages/UserListPage/components/UserFormModal";
import {
  StyledHeader,
  StyledTable,
  StyledTitle,
} from "@/components/pages/UserListPage/index.styled";
import { JOB_LABEL_MAP } from "@/constants/user";
import useUserPage from "@/hooks/useUserPage";
import userStorage from "@/stores/user-storage";
import { Job, User } from "@/types/user";
import { getUserFilters } from "@/utils/user";
import { PlusOutlined } from "@ant-design/icons";
import {
  message as antMessage,
  Modal as AntModal,
  Button,
  Checkbox,
  TableProps,
} from "antd";
import { ColumnType } from "antd/es/table/interface";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const UserListPage = () => {
  const { users, initializeUsers, removeUser } = userStorage();
  const filters = getUserFilters(users);
  const { getFilterDropdown } = useUserPage();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    initializeUsers();
  }, []);

  const getColumnFilters = (
    key: keyof User,
  ): Pick<
    ColumnType,
    "filterDropdown" | "filterDropdownProps" | "onFilter"
  > => {
    return {
      filterDropdown: getFilterDropdown(key, filters),
      filterDropdownProps: {
        placement: "bottomRight",
        overlayStyle: {
          top: 99,
        },
      },
      onFilter: (value, record) =>
        typeof value === "boolean"
          ? record?.[key] === value
          : record[key].indexOf(value as string) === 0,
    };
  };

  const handleClickAction = (action: Action, user: User) => {
    switch (action) {
      case "MODIFY":
        setOpen(true);
        setSelectedUser(user);
        break;
      case "DELETE":
        AntModal.confirm({
          icon: null,
          title: "회원을 삭제하시겠어요?",
          content: (
            <div>
              <p>이름: {user.name}</p>
              <p>직업: {user.job}</p>
            </div>
          ),
          maskClosable: true,
          okText: "삭제",
          okType: "danger",
          cancelText: "취소",
          onOk() {
            removeUser(user.id);
            void antMessage.success("회원을 삭제했어요.");
            return;
          },
          onCancel() {
            return;
          },
        });
        break;
    }
  };

  const columns: TableProps<User>["columns"] = [
    {
      title: "이름",
      dataIndex: "name",
      minWidth: 120,
      width: 120,
      ...getColumnFilters("name"),
    },
    {
      title: "주소",
      dataIndex: "address",
      width: 249,
      ...getColumnFilters("address"),
    },
    {
      title: "메모",
      dataIndex: "memo",
      width: 249,
      ...getColumnFilters("memo"),
    },
    {
      title: "가입일",
      dataIndex: "joinAt",
      minWidth: 200,
      width: 200,
      render: (value) => {
        return dayjs(value).format("YYYY-MM-DD");
      },
      ...getColumnFilters("joinAt"),
    },
    {
      title: "직업",
      dataIndex: "job",
      width: 249,
      render: (value) => {
        return JOB_LABEL_MAP[value as Job];
      },
      ...getColumnFilters("job"),
    },
    {
      title: "이메일 수신 동의",
      dataIndex: "agreement",
      render: (value) => {
        return <Checkbox checked={value} />;
      },
      minWidth: 150,
      width: 150,
      ...getColumnFilters("agreement"),
    },
    {
      render: (_, record) => {
        return (
          <UserActionColumn
            onClick={(action) => handleClickAction(action, record)}
          />
        );
      },
      align: "center",
      minWidth: 48,
      width: 48,
    },
  ];

  const rowSelection: TableProps<User>["rowSelection"] = {
    // onChange: (selectedRowKeys: React.Key[], selectedRows: User[]) => {
    //   //
    // },
    getCheckboxProps: (record: User) => ({
      name: record.id,
    }),
  };

  const handleCloseModal = () => {
    setSelectedUser(undefined);
    setOpen(false);
  };

  return (
    <div>
      <StyledTable
        rowSelection={{ type: "checkbox", ...rowSelection }}
        title={() => {
          return (
            <StyledHeader>
              <StyledTitle>회원 목록</StyledTitle>
              <Button
                type={"primary"}
                icon={<PlusOutlined />}
                onClick={() => setOpen(true)}
              >
                추가
              </Button>
            </StyledHeader>
          );
        }}
        rowKey={"id"}
        dataSource={users}
        columns={columns}
        pagination={false}
      />
      <UserFormModal
        open={open}
        user={selectedUser}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
    </div>
  );
};

export default UserListPage;
