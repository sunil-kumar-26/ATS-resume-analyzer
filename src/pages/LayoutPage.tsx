import styled from "styled-components";
import { useState } from "react";
import { Layout } from "antd";
import SideBar from "../components/SideBar";
import { simpleIcons } from "../utils/simpleIcons";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const Icon = simpleIcons[collapsed ? 1 : 0];

  return (
    <LayoutWrapper>
      <Layout style={{ height: "100vh" }}>
        <Sider
          collapsed={collapsed}
          className="sider"
          onClick={toggleCollapsed}
        >
          <div className="btn-container">
            {simpleIcons && <Icon className="btn" size={24} />}
          </div>
          <SideBar collapsed={collapsed} />
        </Sider>

        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </LayoutWrapper>
  );
};

export default LayoutPage;

const LayoutWrapper = styled.div`
  height: 100vh;
  .sider {
    height: 100vh;
    overflow: hidden;
    background: #101922;
  }
  .ant-layout-sider {
    border-right: 1px solid #1e293b;
  }

  .content {
    height: 100vh;
    overflow-y: auto;
    padding: 24px;
    background: ${(p) => p.theme.background};
  }
  .btn-container {
    color: ${(p) => p.theme.body};
    cursor: pointer;
    display: flex;
    padding: 6px 26px;
    justify-content: end;
  }
  @media (max-width: 430px) {
    .sider {
      display: none;
    }
  }
`;
