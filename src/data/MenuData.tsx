import type { MenuProps } from "antd";
import { menuIcons } from "../data/ReactIcons";
type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  { key: "1", icon: menuIcons["dashboard"], label: "Dashboard" },
  { key: "2", icon: menuIcons["file"], label: "Analyze Resume" },
  { key: "3", icon: menuIcons["history"], label: "History" },
  { key: "4", icon: menuIcons["setting"], label: "Settings" },
];
