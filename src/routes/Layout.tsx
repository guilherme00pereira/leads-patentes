import {useEffect, useState} from "react";
import { ConfigProvider, Layout as Container } from "antd";
import { FormActionContext } from "../lib/context.tsx";
import Sidebar from "../components/Sidebar.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import { contentTheme } from "../config/theme.ts";
import { IconContext } from "react-icons";
import { SearchTableData } from '../lib/types.ts'
import ptBR from "antd/lib/locale/pt_BR";
import '@fontsource/space-grotesk';
import CardPageProvider from "../lib/CardPageProvider.tsx";
import { currentAuthenticatedUser } from "../lib/amplifyClient.ts";

const { Content } = Container;

const Layout = () => {
  const [tableData, setTableData] = useState<SearchTableData[]>([]);
  const [blank, setBlank] = useState(true);
  const [renderTable, setRenderTable] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const authenticated = await currentAuthenticatedUser();
      console.log(authenticated);
      if (!authenticated) {
        navigate({ pathname: "/" });
      }
    }
    checkAuth();
  }, []);

  return (
    <ConfigProvider theme={{ token: { fontFamily: "Space Grotesk" } }}>
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
                <CardPageProvider>
                <Content
                  style={{ paddingLeft: "80px", backgroundColor: "white" }}
                >
                  <Outlet />
                </Content>
                </CardPageProvider>
              </ConfigProvider>
            </Container>
          </IconContext.Provider>
        </FormActionContext.Provider>
      </Container>
    </ConfigProvider>
  );
};

export default Layout;
