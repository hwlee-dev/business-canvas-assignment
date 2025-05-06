import Modal from "@/components/organisms/Modal";
import { StyledFormWrapper } from "@/components/pages/UserListPage/components/UserFormModal/index.styled";
import { USER_FORM_FIELDS } from "@/constants/user";
import useUserPage from "@/hooks/useUserPage";
import userStorage from "@/stores/user-storage";
import { User } from "@/types/user";
import { message as antMessage, Form } from "antd";
import dayjs from "dayjs";
import { Fragment, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  open?: boolean;
  user?: User;
  onClose?: () => void;
  onSubmit?: () => void;
}

const UserFormModal: React.FC<Props> = ({ open, user, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const { addUser, modifyUser } = userStorage();
  const { getFormItems } = useUserPage();

  // 수정시 Form 초기값 설정
  useEffect(() => {
    if (!user) {
      return;
    }

    form.setFieldsValue({ ...user, joinAt: dayjs(user.joinAt) });
  }, [user]);

  // 모달 종료시 Form 리셋
  useEffect(() => {
    return () => {
      if (!open) {
        form.resetFields();
      }
    };
  }, [open]);

  const handleSubmit = (values: User) => {
    let message;
    if (user) {
      modifyUser({
        ...user,
        ...values,
      });
      message = "회원 정보를 수정하였습니다.";
    } else {
      addUser({
        ...values,
        id: uuidv4(),
        agreement: !!values.agreement,
      });
      message = "회원을 추가하였습니다.";
    }
    void antMessage.success(message);
    onSubmit?.();
  };

  return (
    <Modal
      open={open}
      title={user ? "회원 수정" : "회원 추가"}
      onCancel={onClose}
      onOk={form.submit}
      destroyOnClose
    >
      <StyledFormWrapper>
        <Form layout={"vertical"} form={form} onFinish={handleSubmit}>
          {USER_FORM_FIELDS.map((field) => {
            return <Fragment key={field.label}>{getFormItems(field)}</Fragment>;
          })}
        </Form>
      </StyledFormWrapper>
    </Modal>
  );
};

export default UserFormModal;
