import {useState} from "react";
import {Form, Row, Col, Slider as AntSlider, Input} from 'antd';
import type { SliderMarks } from "antd/es/slider";
import {BaseFormProps} from "../../lib/types.ts";

const marks: SliderMarks = {
    0: '0',
    10000: '10000',
}

const Slider = (props: BaseFormProps) => {
    const [value, setValue] = useState(5000);
    return (
        <Form.Item
            name={props.name}
            label={props.label}
            colon={false}
            initialValue={value}
            rules={[{ required: true, message: "Campo obrigatório" }]}
        >
            <Row>
                <Col span={8} offset={8}>
                    <Input value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <AntSlider
                        min={0}
                        max={10000}
                        onChange={(value) => setValue(value)}
                        value={value}
                        marks={marks}
                    />
                </Col>
            </Row>
        </Form.Item>
    );
};

export default Slider;