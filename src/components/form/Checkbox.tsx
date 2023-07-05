import {Form, Checkbox as AntCheckbox} from "antd";

interface CheckboxProps {
    name: string;
    text: string;
}

const Checkbox = (props: CheckboxProps) => {
    return (
        <Form.Item
            name={props.name}
            colon={false}
            rules={[{ required: true, message: 'Campo obrigatório' }]}
        >
            <AntCheckbox style={{paddingTop: "10px"}}>{props.text}</AntCheckbox>
        </Form.Item>
    );
};

export default Checkbox;