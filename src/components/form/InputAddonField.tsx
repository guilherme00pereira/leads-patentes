import {Form, Input} from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import {BaseFormProps} from "../../config/types.ts";

interface InputProps extends BaseFormProps {
  size: SizeType;
  addonBefore?: string;
  width?: number;
}

const InputAddonField = (props: InputProps) => {

  return (
    <Form.Item
      name={props.name}
      label={props.label}
      colon={false}
    >
      <Input
        addonBefore={props.addonBefore}
        placeholder={props.placeholder ?? "Insira o dado de busca"}
        size={props.size}
        style={{ width: props.width ?? '100%' }}
      />
    </Form.Item>
  );
};

export default InputAddonField;