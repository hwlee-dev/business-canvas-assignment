import Button from "@/components/atoms/Button";
import {
  StyledModal,
  StyledTitle,
} from "@/components/organisms/Modal/index.styled";
import { CloseOutlined } from "@ant-design/icons";
import type { ModalProps as AntModalProps } from "antd";
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
          <div>
            {props.closeIcon ? (
              props.closeIcon
            ) : (
              <Button
                type={"text"}
                size={"small"}
                icon={<CloseOutlined />}
              ></Button>
            )}
          </div>
        )}
      </StyledTitle>
    );
  }, [title, closable]);

  return (
    <StyledModal closable={false} title={titleEl} {...props}>
      {children}
    </StyledModal>
  );
};

export default Modal;
