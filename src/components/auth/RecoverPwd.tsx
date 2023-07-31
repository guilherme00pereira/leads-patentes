import {Input, Button, Form} from 'antd'
import {useAuth} from '../../hooks/useAuth.tsx'
import {useState} from 'react'

const RecoverPwd = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [form] = Form.useForm()
  const auth = useAuth()

  const recoverPassword = async () => {
    setLoading(true)
    const values = await form.validateFields()
    const result = await auth.recoverPassword(values.username)
    if (result.success) {
      setMessage("Um e-mail foi enviado para você com as instruções para recuperar sua senha.")
      setLoading(false)
    } else {
      setMessage(result.message)
      setLoading(false)
    }
  }
  return (
    <div style={{marginTop: "20px"}}>
      <Form
        form={form}
        layout="vertical"
        labelCol={{span: 16}}
        wrapperCol={{span: 16}}
        initialValues={{remember: true}}
        autoComplete="off"
      >
        <Form.Item
          label="Nome de usuário"
          name="username"
          rules={[{required: true, message: 'Por favor, insira seu usuário!'}]}
        >
          <Input size="large" style={{width: '300px'}}/>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 6, span: 12}}>
          <Button type="primary" size="large" onClick={recoverPassword} loading={loading}>
            Recuperar Senha
          </Button>
        </Form.Item>
      </Form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RecoverPwd;