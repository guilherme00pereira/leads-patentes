import { Select, Form } from "antd";
import {BaseFormProps} from "../../config/types.ts";

interface SelectProps extends BaseFormProps{
    options: any[];
    defaultValue?: string;
    width?: number;
}

const SelectBasic = (props: SelectProps) => {
    const width = props.width ?? 200;
    const defVal = props.defaultValue ?? '0';

    return (
        <Form.Item
            name={props.name}
            label={props.label}
            colon={false}
            initialValue={defVal}
            rules={[{ required: true, message: "Campo obrigatório" }]}
        >
            <Select size="middle" options={props.options} style={{ width: `${width}px` }} defaultValue={defVal} />
        </Form.Item>
    );
};

export default SelectBasic;