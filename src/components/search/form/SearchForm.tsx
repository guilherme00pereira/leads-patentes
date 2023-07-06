import { useContext } from "react";
import { Form } from "antd";
import SubmitButton from "../../form/SubmitButton.tsx";
import InputField from "../../form/InputField.tsx";
import {
  IndividualSearchType,
  SearchTableData,
} from "../../../config/types.ts";
import { getIndividualSearch } from "../../../lib/apiClient.ts";
import { FormActionContext } from "../../../config/context.tsx";

interface FormProps {
  label: string;
  placeholder?: string;
  menu: IndividualSearchType;
}

const SearchForm = (props: FormProps) => {
  const [form] = Form.useForm();
  const { setRenderTable, setTableData, setLoading, setBlank } = useContext(FormActionContext);

  const handleSubmit = () => {
    setLoading(true);
    setBlank(false);
    const tableData: SearchTableData[] = [];
    form
      .validateFields()
      .then((param) => {
        let result: any = null;
        switch (props.menu) {
          case IndividualSearchType.NOME_SOCIO:
            result = getIndividualSearch(
              props.menu,
              param.termo,
              form.getFieldValue("checkbox")
            );
            break;
          default:
            result = getIndividualSearch(props.menu, param.termo);
            break;
        }

        if (result) {
          result.then((data: any) => {
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
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form
      form={form}
      layout="inline"
      requiredMark="optional"
      style={{ alignItems: "flex-start" }}
    >
      <InputField name="termo" size="large" label={props.label} placeholder={props.placeholder} />
      <Form.Item>
        <SubmitButton onClick={handleSubmit} />
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
