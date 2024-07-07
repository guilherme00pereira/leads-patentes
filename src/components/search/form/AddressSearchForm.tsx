import {useContext, useState} from "react";
import {Col, Form, Row} from 'antd'
import InputField from "../../form/InputField.tsx";
import SubmitButton from "../../form/SubmitButton.tsx";
import SelectEstados from "../../form/SelectEstados.tsx";
import SelectMunicipios from "../../form/SelectMunicipios.tsx";
import {getAddressSearch} from "../../../lib/apiClient.ts";
import {SearchTableData} from "../../../lib/types.ts";
import {FormActionContext} from "../../../lib/context.tsx";

const AddressSearchForm = () => {
  const [selectedUF, setSelectedUF] = useState<string>("");
  const [form] = Form.useForm()
  const { setRenderTable, setTableData, setLoading, setBlank } = useContext(FormActionContext);

  const handleSubmit = () => {
    form.validateFields().then(values => {
      setLoading(true);
      setBlank(false);
      const tableData: SearchTableData[] = [];
      getAddressSearch(values).then((data: any) => {
        Object.entries(data.body).forEach((item: any, index: number) => {
          tableData.push({
            key: index,
            raiz_cnpj: item[1].cnpj_basico,
            cnpj: item[1].cnpj,
            razao_social: item[1].razao_social,
            nome_fantasia: item[1].nome_fantasia,
            uf: item[1].uf,
            municipio: item[1].cod_mun,
            bairro: item[1].bairro,
            cep: item[1].cep,
            logradouro: item[1].lograd,
            numero: item[1].numero,
            cnae_principal: item[1].cnae_principal,
            porte: item[1].porte,
            email: item[1].email,
            telefone: item[1].telefone,
            socios: item[1].lista_socios,
            linkedin: item[1].linkedin,
            facebook: item[1].facebook,
            instagram: item[1].instagram,
          });
        });
        setLoading(false);
        setRenderTable(true);
        setTableData([...tableData]);
      })
    })
      .catch((error) => {
      console.log(error);
    });
  }

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      style={{alignItems: 'center', justifyContent: 'center', width: "100%"}}
    >
      <Row>
        <Col span={8}>
          <SelectEstados size="large" handler={setSelectedUF}/>
        </Col>
        <Col span={8}>
          <SelectMunicipios size="large" parentValue={selectedUF} isRequired/>
        </Col>
        <Col span={8}>
          <InputField name="bairro" size="large" label="Bairro" placeholder="Insira o bairro da busca"
                      required={false}/>
        </Col>
      </Row>
      <Row style={{marginTop: "10px"}} justify="center">
        <Col span={12}>
          <InputField width="90%" name="logradouro" size="large" label="Endereço" placeholder="Insira o endereço da busca" required={false}/>
        </Col>
        <Col span={8}>
          <InputField name="cep" size="large" label="CEP" placeholder="Insira o CEP da busca" width="90%" required={false}/>
        </Col>
        <Col span={4}>
          <Form.Item>
            <SubmitButton text="Buscar" isSearch onClick={handleSubmit}/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddressSearchForm;