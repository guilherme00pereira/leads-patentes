import { Form, DatePicker } from "antd";
import {BaseFormProps} from "../../lib/types.ts";

interface DateFieldProps extends BaseFormProps {
    preLabel: string;
}

const DateField = (props: DateFieldProps) => {
    return (
        <Form.Item
            name={props.name}
            label={props.label}
            colon={false}
        >
            <span className="datepicker-prelabel">{props.preLabel}</span>
            <DatePicker />
        </Form.Item>
    );
};

export default DateField;