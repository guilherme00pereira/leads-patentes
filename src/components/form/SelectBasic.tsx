import { Select, Form } from "antd";

interface SelectProps {
    label: string;
    options: any[];
}

const SelectBasic = (props: SelectProps) => {
    return (
        <Form.Item
            name={props.label.toLowerCase()}
            label={props.label}
            colon={false}
            rules={[{ required: true, message: "Campo obrigatório" }]}
        >
            <Select size="large" style={{ width: "200px" }} options={props.options} />
        </Form.Item>
    );
};

export default SelectBasic;