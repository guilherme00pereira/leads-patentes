import {Form, Input} from "antd";

interface InputProps {
  label: string;
  placeholder?: string;
  width?: number;
}

const InputField = (props: InputProps) => {

  return (
    <Form.Item
      name="termo"
      label={props.label}
      colon={false}
      rules={[{ required: true, message: 'Campo obrigatório' }]}
    >
      <Input
        placeholder={props.placeholder ?? "Insira o dado de busca"}
        size="large"
        style={{ width: props.width ?? '100%' }}
      />
    </Form.Item>
  );
};

export default InputField;