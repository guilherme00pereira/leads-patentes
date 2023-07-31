import { Input, Button, Form, Checkbox } from 'antd'
import { useAuth } from '../../hooks/useAuth.tsx'
import { useNavigate } from 'react-router-dom'
import { ReactNode, useState } from 'react'

const SignIn = ({isAdmin}: {isAdmin: boolean}) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<ReactNode>('')
  const [form] = Form.useForm()
  const auth = useAuth()
  const navigate = useNavigate()

  const executeSignIn = async () => {
    setLoading(true)
    const values = await form.validateFields()

    const result = isAdmin ? await auth.adminSignIn(values.username, values.password) : await auth.signIn(values.username, values.password)
    
    if (result.success) {
      navigate({ pathname: '/painel' })
    } else {
      setMessage(<p className="auth-message-error">{result.message}</p>);
      setLoading(false)
    }
  }

  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        className='form-auth'
      >
        <Form.Item
          label="Login"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size="large" style={{ width: '300px' }} />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size="large" style={{ width: '300px' }} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
          <Checkbox>Lembrar-me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" size="large" onClick={executeSignIn} loading={loading}>
            Entrar
          </Button>
        </Form.Item>
      </Form>
      {message}
    </div>
  )
}

export default SignIn
