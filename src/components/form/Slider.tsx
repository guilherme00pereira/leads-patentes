import {useState} from "react";
import {Form, Row, Col, Slider as AntSlider, Input} from 'antd';
import type { SliderMarks } from "antd/es/slider";

const marks: SliderMarks = {
    0: '0',
    10000: '10000',
}

const Slider = ({label}: {label:string}) => {
    const [value, setValue] = useState(5000);
    return (
        <Form.Item
            name="quantidade_leads"
            label={label}
            colon={false}
        >
            <Row>
                <Col span={8} offset={16}>
                    <Input size="large" value={value} />
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