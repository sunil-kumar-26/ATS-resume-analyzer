import {
  HistoryOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MdDashboard } from "react-icons/md";
import { BsFileEarmarkPdf } from "react-icons/bs";
import type { ReactNode } from "react";

type menuProps={[key:string]:string|ReactNode}
export const menuIcons:menuProps = {
  dashboard: <MdDashboard />,
  history: <HistoryOutlined />,
  setting: <SettingOutlined />,
  file: <BsFileEarmarkPdf />,
  home: <HomeOutlined />,
};
