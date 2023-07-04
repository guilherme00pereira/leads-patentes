import  { Table } from 'antd';
import { useContext } from 'react';
import { FormActionContext } from '../../config/context.tsx';
import Column from "antd/es/table/Column";
import { searchTableColumns } from '../../config/data.tsx';
import PreTable from '../PreTable.tsx';

const SearchResultTable = () => {
    const { tableData } = useContext(FormActionContext)

    return (
        <div className='table-wrapper'>
            <PreTable total={tableData.length} columns={searchTableColumns} dataSource={tableData}/>
            <Table pagination={{position: ["bottomCenter"]}} dataSource={tableData} rowKey="id" scroll={{x: true}}>
                <Column title="Raiz CNPJ" dataIndex="raiz_cnpj" />
                <Column title="CNPJ" dataIndex="cnpj" />
                <Column title="Razão Social" dataIndex="razao_social" />
                <Column title="Nome Fantasia" dataIndex="nome_fantasia" />
                <Column title="UF" dataIndex="uf" />
                <Column title="Município" dataIndex="municipio" />
                <Column title="Bairro" dataIndex="bairro" />
                <Column title="CEP" dataIndex="cep" />
                <Column title="Logradouro" dataIndex="logradouro" />
                <Column title="Número" dataIndex="numero" />
                <Column title="CNAE Principal" dataIndex="cnae_principal" />
                <Column title="Porte" dataIndex="porte" />
                <Column title="Email" dataIndex="email" />
                <Column title="Telefone" dataIndex="telefone" />
                <Column title="Sócios" dataIndex="socios" />
                <Column title="Linkedin" dataIndex="linkedin" />
                <Column title="Facebook" dataIndex="facebook" />
                <Column title="Instagram" dataIndex="instagram" />
            </Table>
        </div>
    );
};

export default SearchResultTable;