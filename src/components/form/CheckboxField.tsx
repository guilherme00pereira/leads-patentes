import {Form, Checkbox} from "antd";

interface CheckboxProps {
    name: string;
    text: string;
}

const CheckboxField = (props: CheckboxProps) => {
    return (
        <Form.Item
            name={props.name}
            colon={false}
            rules={[{required: true, message: 'Campo obrigatório'}]}
            style={{textAlign: "center"}}
        >
            <Checkbox style={{paddingTop: "10px"}}>{props.text}</Checkbox>
        </Form.Item>
    );
};

export default CheckboxField;