import { Button, ConfigProvider, Layout as Container } from 'antd'
import SignIn from "../components/auth/SignIn.tsx";
import {loginTheme} from "../config/theme.ts";
import {Link} from "react-router-dom";
import {useState} from "react";
import RecoverPwd from "../components/auth/RecoverPwd.tsx";

const { Content } = Container

const Auth = () => {
  const [showRecover, setShowRecover] = useState(false)

  return (
    <ConfigProvider theme={loginTheme}>
      <Container>
        <Content className="container-auth-card">
          <div className='link-acesso-admin'>
            <Link to="/admin">Acesso Restrito</Link>
          </div>
          <div className="auth-card">
            {showRecover ? (
              <>
                <h3>Recuperar Senha</h3>
                <RecoverPwd />
              </>
            ) : (
              <>
                <h3>Acesso</h3>
                <SignIn isAdmin={false} />
              </>
            )
            }
            <Button type="link" onClick={() => setShowRecover(!showRecover)}>
              {showRecover ? "Fazer o login" : "Esqueci minha senha"}
            </Button>
          </div>
        </Content>
      </Container>
    </ConfigProvider>
  );
};

export default Auth;