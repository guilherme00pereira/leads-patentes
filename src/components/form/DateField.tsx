import { Form, DatePicker } from "antd";
import {BaseFormProps} from "../../config/types.ts";

const DateField = (props: BaseFormProps) => {
    return (
        <Form.Item
            name={props.name}
            label={props.label}
            colon={false}
        >
            <DatePicker />
        </Form.Item>
    );
};

export default DateField;