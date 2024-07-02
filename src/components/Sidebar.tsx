import { useContext, useEffect, useState } from "react";
import { Layout, Button } from "antd";
import Icon from "@ant-design/icons";
import { siderTheme } from "../config/theme.ts";
import { ConfigProvider, Menu } from "antd";
import StacksSvg from "../assets/svg/stacks.svg?react";
import EditDocument from "../assets/svg/edit_document.svg?react";
import History from "../assets/svg/history.svg?react";
import Leaderboard from "../assets/svg/leaderboard.svg?react";
import PersonSearch from "../assets/svg/person_search.svg?react";
import Sell from "../assets/svg/sell.svg?react";
import TrendingUp from "../assets/svg/trending.svg?react";
import DisplaySettings from "../assets/svg/display_settings.svg?react";
import Logout from "../assets/svg/logout.svg?react";
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
              icon={<Icon component={TrendingUp} style={{ fontSize: "24px" }} />}
              className="sidebar-menu-item"
            >
              <Link to="analytics" onClick={() => setSelectedKey("ana")}>Analytics</Link>
            </Menu.Item>
            <SubMenu key="ops" title="Ops" icon={<Icon component={StacksSvg} style={{ fontSize: "24px" }} />} className="menu-item">
              <Menu.Item
                key="bin"
                icon={<Icon component={PersonSearch} style={{ fontSize: "24px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="/painel" onClick={() => setSelectedKey("bin")}>Busca Individual</Link>
              </Menu.Item>
              <Menu.Item
                key="gle"
                icon={<Icon component={Leaderboard} style={{ fontSize: "24px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="geracao-leads" onClick={() => setSelectedKey("gle")}>Geração de Leads</Link>
              </Menu.Item>
              <Menu.Item
                key="hdi"
                icon={<Icon component={History} style={{ fontSize: "24px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="historico-de-importacoes" onClick={() => setSelectedKey("hdi")}>Histórico de Importações</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="str"
              icon={<Icon component={EditDocument} style={{ fontSize: "24px" }} />}
              className="sidebar-menu-item"
            >
              <Link to="strategy" onClick={() => setSelectedKey("str")}>Strategy</Link>
            </Menu.Item>
            <Menu.Item
              key="int"
              icon={<Icon component={Sell} style={{ fontSize: "24px" }} />}
              className="sidebar-menu-item"
            >
              <Link to="integration" onClick={() => setSelectedKey("int")}>Integrações</Link>
            </Menu.Item>
            {auth.isAdmin && (
              <Menu.Item
                key="adm"
                icon={<Icon component={DisplaySettings} style={{ fontSize: "24px" }} />}
                className="sidebar-menu-item"
              >
                <Link to="administrativo" onClick={() => setSelectedKey("adm")}>Administrativo</Link>
              </Menu.Item>
            )}
          </Menu>
          <Menu className="submenulist" theme="dark" mode="inline" inlineCollapsed={collapsed}>
            <Menu.Item key="lo" icon={<Icon component={Logout} style={{ fontSize: "24px" }} />} className="sidebar-menu-item">
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
