import { useEffect, useState } from "react";
import { ConfigProvider, Layout as Container } from "antd";
import { FormActionContext } from "../config/context.tsx";
import Sidebar from "../components/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import { contentTheme } from "../config/theme.ts";
import { IconContext } from "react-icons";
import { SearchTableData } from '../config/types.ts'
import ptBR from "antd/lib/locale/pt_BR";
//import { useAuth } from "../hooks/useAuth.tsx";
import '@fontsource/barlow';

const { Content } = Container;

const Layout = () => {
  const [tableData, setTableData] = useState<SearchTableData[]>([]);
  const [blank, setBlank] = useState(true);
  const [renderTable, setRenderTable] = useState(false);
  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();

  //const auth = useAuth();

  useEffect(() => {
    // if (!auth.isAuthenticated) {
    //   return navigate("/");
    // }
  }, []);

  return (
    <ConfigProvider theme={{ token: { fontFamily: "Barlow" } }}>
      <Container style={{ minHeight: "100vh" }}>
        <FormActionContext.Provider
          value={{
            setRenderTable,
            setLoading,
            setBlank,
            tableData,
            setTableData,
            renderTable,
            loading,
            blank,
          }}
        >
          <IconContext.Provider value={{ size: "1.25em" }}>
            <Sidebar />
            <Container>
              <ConfigProvider theme={contentTheme} locale={ptBR}>
                <Content
                  style={{ paddingLeft: "80px", backgroundColor: "white" }}
                >
                  <Outlet />
                </Content>
              </ConfigProvider>
            </Container>
          </IconContext.Provider>
        </FormActionContext.Provider>
      </Container>
    </ConfigProvider>
  );
};

export default Layout;
