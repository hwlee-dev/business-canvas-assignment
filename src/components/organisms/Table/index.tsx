import { StyledTableWrapper } from "@/components/organisms/Table/index.styled";
import type { TableProps } from "antd";
import { Table as AntTable } from "antd";

const Table = <T extends object>(props: TableProps<T>) => {
  return (
    <StyledTableWrapper>
      <AntTable<T> {...props} />
    </StyledTableWrapper>
  );
};

export default Table;
