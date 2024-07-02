import { useContext, useEffect, useState } from "react";
import { Layout, Button } from "antd";
import Icon from "@ant-design/icons";
import { siderTheme } from "../config/theme.ts";
import { ConfigProvider, Menu } from "antd";
import {
  MdOutlinePersonSearch,
  MdOutlineLeaderboard,
  MdOutlineHistory,
  MdDisplaySettings,
  MdOutlineLogout,
  MdOutlineTrendingUp,
  MdOutlineSell,
  MdEditDocument
} from "react-icons/md";
import StacksSvg from "../assets/svg/stacks.svg"
import { Link, useLocation } from "react-router-dom";
import { FormActionContext } from "../config/context.tsx";
import { useAuth } from "../hooks/useAuth.tsx";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const { setRenderTable, setTableData, setBlank, setLoading } = useContext(FormActionContext);
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState("");
  const location = useLocation();

  const auth = useAuth();

  const logout = () => {
    auth.signOut();
    window.location.href = "/";
  };

  useEffect(() => {
    setTableData([]);
    setBlank(true);
    setLoading(false);
    setRenderTable(false);
  }, [location]);

  return (
    <ConfigProvider theme={siderTheme}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={340}
        onMouseOver={() => setCollapsed(false)}
        onMouseOut={() => setCollapsed(true)}
        style={{
          overflow: "auto",
          position: "fixed",
          minHeight: "100vh",
          left: 0,
          bottom: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        <div className="sidebar-menu">
          <Menu selectedKeys={[selectedKey]} mode="inline" theme="dark" inlineCollapsed={collapsed} className="submenulist">
            <Menu.Item
              key="ana"
              icon={<MdOutlineTrendingUp style={{ fontSize: "18px" }} />}
              className="sidebar-menu-item"
            >
              <Link to="analytics" onClick={() => setSelectedKey("ana")}>Analytics</Link>
            </Menu.Item>
            <SubMenu key="ops" title="Ops" icon={<Icon component={StacksSvg} style={{ fontSize: "18px" }} />} className="menu-item">
              <Menu.Item
                key="bin"
                icon={<MdOutlinePersonSearch style={{ fontSize: "18px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="/painel" onClick={() => setSelectedKey("bin")}>Busca Individual</Link>
              </Menu.Item>
              <Menu.Item
                key="gle"
                icon={<MdOutlineLeaderboard style={{ fontSize: "18px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="geracao-leads" onClick={() => setSelectedKey("gle")}>Geração de Leads</Link>
              </Menu.Item>
              <Menu.Item
                key="hdi"
                icon={<MdOutlineHistory style={{ fontSize: "18px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="historico-de-importacoes" onClick={() => setSelectedKey("hdi")}>Histórico de Importações</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="str"
              icon={<MdEditDocument style={{ fontSize: "18px" }} />}
              className="sidebar-menu-item"
            >
              <Link to="strategy" onClick={() => setSelectedKey("str")}>Strategy</Link>
            </Menu.Item>
            <Menu.Item
              key="int"
              icon={<MdOutlineSell style={{ fontSize: "18px" }} />}
              className="sidebar-menu-item"
            >
              <Link to="integration" onClick={() => setSelectedKey("int")}>Integrações</Link>
            </Menu.Item>
            {auth.isAdmin && (
              <Menu.Item
                key="adm"
                icon={<MdDisplaySettings style={{ fontSize: "18px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="administrativo" onClick={() => setSelectedKey("adm")}>Administrativo</Link>
              </Menu.Item>
            )}
          </Menu>
          <Menu className="submenulist" theme="dark" mode="inline" inlineCollapsed={collapsed}>
            <Menu.Item key="lo" icon={<MdOutlineLogout style={{ fontSize: "18px" }} />} className="sidebar-menu-item">
              <Button type="text" style={{ color: "rgb(255, 255, 255, 0.65)", fontSize: "18px" }} onClick={logout}>
                Sair
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
    </ConfigProvider>
  );
};

export default Sidebar;
