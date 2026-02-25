import { Menu } from "antd";
import { menuItems } from "../data/MenuData";
import type { MenuProps } from "antd";
import useLocalStorage from "../hooks/useLocalStorage";
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
    <>
      <Menu
        defaultSelectedKeys={[`${defaultMenuKey}`]}
        defaultOpenKeys={[`${defaultMenuKey}`]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={(e) => handleStopPropagation(e)}
      />
    </>
  );
};

export default SideBar;
