import { Modal as AntModal } from "antd";
import styled from "styled-components";

export const StyledModal = styled(AntModal)`
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

export const StyledTitle = styled.div`
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
