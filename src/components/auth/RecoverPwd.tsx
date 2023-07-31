import { Input, Button, Form } from "antd";
import { useAuth } from "../../hooks/useAuth.tsx";
import { ReactNode, useState } from "react";

const RecoverPwd = () => {
  const [hasCode, setHasCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ReactNode>("");
  const [form] = Form.useForm();
  const auth = useAuth();

  const recoverPassword = async () => {
    setLoading(true);
    const values = await form.validateFields();
    const result = await auth.recoverPassword(values.username);
    if (result.success) {
      setMessage(
        <p className="auth-message-info">
          Um e-mail foi enviado para você com as instruções para recuperar sua
          senha.
        </p>
      );
    } else {
      setMessage(<p className="auth-message-error">{result.message}</p>);
    }
    setLoading(false);
  };

  const submitCodeNewPassword = async () => {
    setLoading(true);
    const values = await form.validateFields();
    const result = await auth.sendRecoverPasswordCode(
      values.username,
      values.code,
      values.newPassword
    );
    if (result.success) {
      setMessage(
        <p className="auth-message-success">Senha alterada com sucesso!</p>
      );
    } else {
      setMessage(<p className="auth-message-error">{result.message}</p>);
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Form
        form={form}
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="form-auth"
      >
        <Form.Item
          label="Nome de usuário"
          name="username"
          rules={[
            { required: true, message: "Por favor, insira seu usuário!" },
          ]}
        >
          <Input size="large" style={{ width: "300px" }} />
        </Form.Item>

        {hasCode && (
          <>
            <Form.Item
              label="Código de verificação"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira o código de verificação!",
                },
              ]}
            >
              <Input size="large" style={{ width: "300px" }} />
            </Form.Item>
            <Form.Item
              label="Nova senha"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua nova senha!",
                },
              ]}
            >
              <Input.Password size="large" style={{ width: "300px" }} />
            </Form.Item>
          </>
        )}
        {hasCode || (
          <>
            <Form.Item wrapperCol={{ span: 12 }}>
              <Button
                type="primary"
                onClick={recoverPassword}
                loading={loading}
              >
                Recuperar Senha
              </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12 }}>
              <Button onClick={() => setHasCode(!hasCode)}>
                Já tenho o código
              </Button>
            </Form.Item>
          </>
        )}

        {hasCode && (
          <Form.Item wrapperCol={{ span: 8 }}>
            <Button
              type="primary"
              size="large"
              onClick={submitCodeNewPassword}
              loading={loading}
            >
              Enviar
            </Button>
          </Form.Item>
        )}
      </Form>
      {message}
    </div>
  );
};

export default RecoverPwd;
