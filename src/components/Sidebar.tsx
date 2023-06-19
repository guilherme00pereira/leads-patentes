import { useContext, useEffect, useState } from "react";
import { Layout, Button } from "antd";
import { siderTheme } from "../config/theme.ts";
import { ConfigProvider, Menu } from "antd";
import {
  MdOutlineSearch,
  MdOutlineDescription,
  MdOutlineLogout,
} from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FormActionContext } from "../config/context.tsx";
import { useAuth } from "../hooks/useAuth.tsx";

const { Sider } = Layout;

const Sidebar = () => {
  const {
    setRenderTable,
    setTableData,
    setBlank,
    setLoading,
  } = useContext(FormActionContext);
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState("");
  const location = useLocation();

  const auth = useAuth();

  const logout = () => {
    auth.signOut();
    window.location.href = "/";
  };

  const setActive = () => {
    if (location.pathname === "/painel/geracao-leads") {
      setSelectedKey("gl");
    } else if (location.pathname === "/painel/historico-de-importacoes") {
      setSelectedKey("hi");
    } else {
      setSelectedKey("bi");
    }
  };

  useEffect(() => {
    setTableData([]);
    setBlank(true);
    setLoading(false);
    setRenderTable(false);
    setActive();
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
          backgroundColor: "#00AFCE",
        }}
      >
        <div className="sidebar-menu">
          <Menu
            selectedKeys={[selectedKey]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
          >
            <Menu.Item
              key="bi"
              icon={<MdOutlineSearch />}
              className="sidebar-menu-item"
            >
              <Link to="/painel">Busca Individual</Link>
            </Menu.Item>
            <Menu.Item
              key="gl"
              icon={<MdOutlineDescription />}
              className="sidebar-menu-item"
            >
              <Link to="geracao-leads">Geração de Leads</Link>
            </Menu.Item>
            <Menu.Item
              key="hi"
              icon={<MdOutlineDescription />}
              className="sidebar-menu-item"
            >
              <Link to="historico-de-importacoes">
                Histórico de Importações
              </Link>
            </Menu.Item>
          </Menu>
          <Menu theme="dark" mode="inline" inlineCollapsed={collapsed}>
            <Menu.Item
              key="lo"
              icon={<MdOutlineLogout />}
              className="sidebar-menu-item"
            >
              <Button
                type="text"
                style={{ color: "rgb(255, 255, 255, 0.65)", fontSize: "18px" }}
                onClick={logout}
              >
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
