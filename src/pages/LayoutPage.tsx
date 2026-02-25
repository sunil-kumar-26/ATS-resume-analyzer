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
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsed={collapsed}
          className="sider"
          onClick={toggleCollapsed}
        >
          <div className="btn-container">
            {simpleIcons && (
              <Icon className="btn" size={24} onClick={toggleCollapsed} />
            )}
          </div>
          <SideBar collapsed={collapsed} />
        </Sider>
        <Content><Outlet/></Content>
      </Layout>
    </LayoutWrapper>
  );
};

export default LayoutPage;

const LayoutWrapper = styled.div`
  background: ${(props) => props.theme.heroPageBackground};
  .heading {
    color: yellow !important;
  }
  .sider {
    display: flex;
    flex-direction: column;
    user-select: none;
  }
  .btn {
    color: white;
    cursor: pointer;
  }
  .btn-container {
    padding: 12px;
    text-align: end;
  }
`;
