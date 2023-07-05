import { Select, Form } from "antd";

interface SelectProps {
    label: string;
    options: any[];
    defaultValue?: string;
    width?: number;
}

const SelectBasic = (props: SelectProps) => {
    const width = props.width ?? 200;
    const defVal = props.defaultValue ?? '0';

    return (
        <Form.Item
            name={props.label.toLowerCase()}
            label={props.label}
            colon={false}
            rules={[{ required: true, message: "Campo obrigatório" }]}
        >
            <Select size="middle" options={props.options} style={{ width: `${width}px` }} defaultValue={defVal} />
        </Form.Item>
    );
};

export default SelectBasic;