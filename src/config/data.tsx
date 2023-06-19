import {TabsProps} from "antd";
import SearchSection from "../components/search/sections/SearchSection.tsx";
import AddressSection from "../components/search/sections/AddressSection.tsx";

export const searchMenuItems: TabsProps['items'] = [
    {
        key: '1',
        label: `CNPJ`,
        children: <SearchSection label="CNPJ" placeholder="Insira o CNPJ para busca" />
    },
    {
        key: '2',
        label: `Raiz CNPJ`,
        children: <SearchSection label="Raiz CNPJ"  />
    },
    {
        key: '3',
        label: `Nome Sócio`,
        children: <SearchSection label="Nome Sócio" />
    },
    {
        key: '4',
        label: `CPF`,
        children: <SearchSection label="CPF" placeholder="Insira o CPF para busca" />
    },
    {
        key: '5',
        label: `Endereço`,
        children: <AddressSection />
    }
]

export const searchTableColumns = [
    {
        title: 'Raíz CNPJ',
        dataIndex: 'raiz_cnpj',
    },
    {
        title: 'CNPJ',
        dataIndex: 'cnpj',
    },
    {
        title: 'Razão Social',
        dataIndex: 'razao_social',
    },
    {
        title: 'Nome Fantasia',
        dataIndex: 'nome_fantasia',
    },
    {
        title: 'UF',
        dataIndex: 'uf',
    },
    {
        title: 'Município',
        dataIndex: 'municipio',
    },
    {
        title: 'Bairro',
        dataIndex: 'bairro',
    },
    {
        title: 'CEP',
        dataIndex: 'cep',
    },
    {
        title: 'Logradouro',
        dataIndex: 'logradouro',
    },
    {
        title: 'Número',
        dataIndex: 'numero',
    },
    {
        title: 'CNAE Principal',
        dataIndex: 'cnae_principal',
    },
    {
        title: 'Porte',
        dataIndex: 'porte',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
    },
    {
        title: 'Telefone',
        dataIndex: 'telefone',
    },
    {
        title: 'Sócios',
        dataIndex: 'socios',
    },
    {
        title: 'LinkedIn',
        dataIndex: 'linkedin',
    },
    {
        title: 'Qtn. Seguidores LinkedIn',
        dataIndex: 'qtn_seguidores_linkedin',
    },
    {
        title: 'Facebook',
        dataIndex: 'facebook',
    },
    {
        title: 'Qtn. Seguidores Facebook',
        dataIndex: 'qtn_seguidores_facebook',
    },
    {
        title: 'Instagram',
        dataIndex: 'instagram',
    },
    {
        title: 'Qtn. Seguidores Instagram',
        dataIndex: 'qtn_seguidores_instagram',
    }
]