import { Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Typography } from "../theme/AppTypography";
import type { ReactNode } from "react";
import styled from "styled-components";

interface DataType {
  key: string;
  CANDIDATE: ReactNode | HTMLElement | string;
  DATE_ANALYZED: string | Date | number;
  MATCH_SCRORE: ReactNode | HTMLElement | string;
  STATUS: "STRONG FIT" | "MODERATE FIT" | "WEAK FIT";
  ACTIONS?: ReactNode | HTMLElement;
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "CANDIDATE",
    dataIndex: "CANDIDATE",
    key: "1",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "DATE ANALYZED",
    dataIndex: "DATE_ANALYZED",
    key: "2",
  },
  {
    title: "MATCH SCRORE",
    dataIndex: "MATCH_SCRORE",
    key: "3",
  },
  {
    title: "STATUS",
    key: "4",
    dataIndex: "STATUS",
  },
  {
    title: "ACTIONS",
    dataIndex: "ACTIONS",
    key: "5",
  },
];

const data: DataType[] = [
  {
    key: "1",
    CANDIDATE: "John Brown",
    DATE_ANALYZED: 32,
    MATCH_SCRORE: "New York No. 1 Lake Park",
    STATUS: "STRONG FIT",
  },
  {
    key: "2",
    CANDIDATE: "Jim Green",
    DATE_ANALYZED: 42,
    MATCH_SCRORE: "London No. 1 Lake Park",
    STATUS: "STRONG FIT",
  },
  {
    key: "3",
    CANDIDATE: "Joe Black",
    DATE_ANALYZED: 32,
    MATCH_SCRORE: "Sydney No. 1 Lake Park",
    STATUS: "STRONG FIT",
  },
];

export const DashboardTable = () => {
  return (
    <SpaceWrapper>
      <Space
        direction="vertical"
        size={"large"}
        style={{ width: "100%" }}
        className=""
      >
        <Typography variant="h4Semibold" className={"heading"}>
          Recent Analysis
        </Typography>
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          scroll={{ x: "max-content" }}
        />
      </Space>
    </SpaceWrapper>
  );
};

const SpaceWrapper = styled.div`
  background: #151f2c;
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  .ant-table {
    background: #151f2c; // 👈 table body background
  }

  .ant-table {
    background: transparent !important;
  }

  .ant-table-container {
    border: none !important;
  }
  .ant-table-content table {
    border-spacing: 0;
  }
  .ant-table-thead > tr > th {
    background: #162334 !important;
    color: #64748b !important;
    font-size: 12px;
    font-weight: 600;
    border-bottom: 1px solid #1e293b !important;
  }
  .ant-table-tbody > tr > td {
    background: #0f1b2d !important;
    color: #cbd5e1;
    border-bottom: 1px solid #1e293b !important;
  }

  .ant-table-tbody > tr:last-child > td {
    border-bottom: none !important;
  }
  .ant-table-tbody > tr:hover > td {
    background: #162334 !important;
  }
  .ant-table-thead > tr > th {
    background: #1a2534 !important;
    color: #64748b;
  }
  .heading {
    padding: 18px 0px 0px 18px;
    color: ${(prop) => prop.theme.body};
  }

  @media (max-width: 430px) {
    overflow-x: auto;
  }
`;
