import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PieChartOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
import { SidebarWrapper } from "./LayoutSiderStyle";

const { Sider } = Layout;
const { useToken } = theme;

export const LayoutSider = () => {
  const { token } = useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [displaySidebar, setDisplaySidebar] = useState("none");

  const sidebarItems = [
    { name: "Dashboard", linkTo: "/", key: "1", icon: <PieChartOutlined /> },
    { name: "Map", linkTo: "/map", key: "2", icon: <HeatMapOutlined /> },
  ];


  return (
    <SidebarWrapper bgcolor={token.colorPrimaryText} collapseBgColor={token.colorPrimaryBorder}>
      <Sider
        breakpoint="lg"
        width={170}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ display: displaySidebar, height:"92vh", background: token.colorPrimaryBorder }}
      >
        <Menu
          theme="dark"
          style={{ background: token.colorPrimaryBorderHover }}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          {sidebarItems.map((obj) => (
            <Menu.Item
              key={obj.key}
              icon={obj.icon}
              style={{ background: token.colorPrimaryBorderHover }}
            >
              <span>{obj.name}</span>
              <Link to={obj.linkTo} />
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </SidebarWrapper>
  );
};
