import type { MenuProps } from "antd";
import { menuIcons } from "../data/ReactIcons";
import { Link } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: "1",
    icon: menuIcons["dashboard"],
    label: <Link to={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "2",
    icon: menuIcons["file"],
    label: <Link to={"/dashboard/analyzer"}>Analyze Resume</Link>,
  },
  {
    key: "3",
    icon: menuIcons["history"],
    label: <Link to={"/dashboard/history"}>History</Link>,
  },
  {
    key: "4",
    icon: menuIcons["setting"],
    label: <Link to={"/dashboard/setting"}>Settings</Link>,
  },
];
