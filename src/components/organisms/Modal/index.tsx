import {
  StyledModal,
  StyledTitle,
} from "@/components/organisms/Modal/index.styled";
import { CloseOutlined } from "@ant-design/icons";
import { ModalProps as AntModalProps, Button } from "antd";
import { useMemo } from "react";

interface ModalProps extends Omit<AntModalProps, "title" | "closable"> {
  title?: React.ReactNode;
  closable?: boolean;
}

const Modal = ({ children, title, closable = true, ...props }: ModalProps) => {
  const titleEl = useMemo(() => {
    if (!title && !closable) {
      return null;
    }

    return (
      <StyledTitle>
        {title && <div className={"title"}>{title}</div>}
        {closable && (
          <Button
            type={"text"}
            size={"small"}
            icon={props.closeIcon ? props.closeIcon : <CloseOutlined />}
            onClick={props.onCancel}
          />
        )}
      </StyledTitle>
    );
  }, [title, closable, props.closeIcon]);

  return (
    <StyledModal closable={false} title={titleEl} {...props}>
      {children}
    </StyledModal>
  );
};

export default Modal;
