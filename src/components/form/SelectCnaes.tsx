import {useState, useEffect} from "react";
import {Select, Form} from "antd";
import {SizeType} from "antd/es/config-provider/SizeContext";

interface SelectProps {
    size: SizeType;
}


const SelectField = (props: SelectProps) => {
    const [options, setOptions] = useState<any[]>([]);

    useEffect(() => {
        let cnaes: any[];
        fetch("/cnaes.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                cnaes = data;
            })
            .then(() => {
                const sortedCnaes = cnaes.sort((a: any, b: any) => a.descricao.localeCompare(b.descricao));
                setOptions(sortedCnaes.map((cnae: any) => {
                    return {
                        value: cnae.codigo,
                        label: cnae.codigo + " - " + cnae.descricao,
                    };
                }));
            });
    }, []);

    return (
        <Form.Item
            name="cnae"
            label="CNAE"
            colon={false}
        >
            <Select size={props.size} style={{width: "300px"}} options={options} placeholder="CNAE" />
        </Form.Item>
    );
};

export default SelectField;
