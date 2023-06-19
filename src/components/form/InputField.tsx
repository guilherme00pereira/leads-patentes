import {Form, Input} from "antd";
import {useContext} from "react";
import {SearchContext} from "../../config/context.tsx";

const InputField = () => {
  const {label, placeholder} = useContext(SearchContext);

  return (
    <Form.Item
      name="termo"
      label={label}
      colon={false}
      rules={[{ required: true, message: 'Campo obrigatório' }]}
    >
      <Input
        placeholder={placeholder}
        size="large"
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
};

export default InputField;