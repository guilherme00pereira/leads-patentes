import { Input, Button, Form, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ReactNode, useState } from 'react'
import { authenticateUser } from '../../lib/amplifyClient.ts'

const SignIn = ({isAdmin}: {isAdmin: boolean}) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<ReactNode>('')
  const [confirmPasswordStep, setConfirmPasswordStep] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const handleSignIn = async () => {
    setLoading(true)
    const values = await form.validateFields()
    //const result = isAdmin ? await auth.adminSignIn(values.username, values.password) : await auth.signIn(values.username, values.password)
    const signedIn = await authenticateUser({ username: values.username, password: values.password })

    if (signedIn == 1) {
      navigate({ pathname: '/painel' })
    } else if (signedIn == 2) {
      setConfirmPasswordStep(true)
    } else {
      setMessage('Usuário ou senha inválidos')
      setLoading(false)
    }
  }

  const handleConfirmPassword = () => {
    
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
          <Button type="primary" size="large" onClick={handleSignIn} loading={loading}>
            Entrar
          </Button>
        </Form.Item>
      </Form>
      {message}
    </div>
  )
}

export default SignIn
