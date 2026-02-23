import { Menu } from "antd";
import { menuItems } from "../data/MenuData";
type SideBarProps = {
  collapsed: boolean;
};
const SideBar = ({ collapsed }: SideBarProps) => {
  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={(e) => {
          e.domEvent.stopPropagation();
        }}
      />
    </>
  );
};

export default SideBar;
