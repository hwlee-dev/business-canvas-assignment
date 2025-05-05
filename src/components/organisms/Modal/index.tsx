import { Modal as AntModal } from "antd";
import type { ModalProps as AntModalProps } from "antd";
import { useMemo } from "react";
import Button from "@/components/atoms/Button";
import { CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";

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

const StyledModal = styled(AntModal)`
  &&& {
    .ant-modal-content {
      padding: 0;
    }
    .ant-modal-body {
      padding: 0 24px;
    }
    .ant-modal-footer {
      margin: 0;
      padding: 12px 16px;
    }
  }
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 16px;

  .title {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export default Modal;
