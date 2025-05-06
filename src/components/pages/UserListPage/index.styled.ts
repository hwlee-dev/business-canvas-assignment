import Table from "@/components/organisms/Table";
import { User } from "@/types/user";
import { Checkbox } from "antd";
import styled from "styled-components";

export const StyledTable = styled(Table<User>)`
  &&& {
    td.ant-table-cell:first-child {
      border-left: 1px solid #f0f0f0;
      border-right: 1px solid #f0f0f0;
    }
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const StyledTitle = styled.h5`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
`;

export const StyledCheckboxGroup = styled(Checkbox.Group)`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    min-width: 150px;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  &&& {
    padding: 5px 12px;
  }
`;
