import { ConfigProvider, Layout as Container } from "antd";
import SignIn from "../components/auth/SignIn.tsx";
import { loginTheme } from "../config/theme.ts";

const { Content } = Container;

const AdminAuth = () => {
  return (
    <ConfigProvider theme={loginTheme}>
      <Container>
        <Content
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="auth-card">
            <h3>Acesso Adminstrador</h3>
            <SignIn isAdmin={true} />
          </div>
        </Content>
      </Container>
    </ConfigProvider>
  );
};

export default AdminAuth;
