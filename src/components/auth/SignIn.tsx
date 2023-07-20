import { Input, Button, Form, Checkbox } from 'antd'
import { useAuth } from '../../hooks/useAuth.tsx'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [form] = Form.useForm()
  const auth = useAuth()
  const navigate = useNavigate()

  const executeSignIn = async () => {
    setLoading(true)
    const values = await form.validateFields()

    const result = await auth.signIn(values.username, values.password)
    if (result.success) {
      navigate({ pathname: '/painel' })
    } else {
      setMessage(result.message)
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

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Lembrar-me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" size="large" onClick={executeSignIn} loading={loading}>
            Entrar
          </Button>
        </Form.Item>
      </Form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default SignIn
