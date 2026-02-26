import { Menu } from "antd";
import { menuItems } from "../data/MenuData";
import type { MenuProps } from "antd";
import useLocalStorage from "../hooks/useLocalStorage";
import styled from "styled-components";
type SideBarProps = {
  collapsed: boolean;
};
const SideBar = ({ collapsed }: SideBarProps) => {
  const { defaultMenuKey, setStorage } = useLocalStorage();
  const handleStopPropagation: MenuProps["onClick"] = (e) => {
    setStorage(e.key);
    e.domEvent.stopPropagation();
  };
  return (
    <SideWrapper>
      <Menu
        defaultSelectedKeys={[`${defaultMenuKey}`]}
        defaultOpenKeys={[`${defaultMenuKey}`]}
        mode="inline"
        theme="dark"
        className="sider"
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={(e) => handleStopPropagation(e)}
      />
    </SideWrapper>
  );
};

export default SideBar;

const SideWrapper = styled.div`
  background: #101922 !important;
  .sider {
    background: #101922 !important;
  }
   
  .ant-menu-item ant-menu-item-selected {
    background: #122437 ! important;
  }

`;
