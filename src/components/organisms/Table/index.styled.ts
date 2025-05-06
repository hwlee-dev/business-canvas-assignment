import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  &&& {
    .ant-table-title {
      padding: 0 14px;
    }

    th.ant-table-cell {
      padding: 8px;

      .ant-table-filter-column {
        align-items: center;
        padding: 0 8px;

        .ant-dropdown-trigger,
        .ant-table-filter-trigger {
          height: 22px;
          width: 20px;
          margin-inline: unset;
          line-height: unset;
        }
      }
    }

    td.ant-table-cell {
      padding: 13px 8px;
    }
  }
`;
