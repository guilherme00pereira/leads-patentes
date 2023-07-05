import {TabsProps} from "antd";
import SearchSection from "../components/search/sections/SearchSection.tsx";
import AddressSection from "../components/search/sections/AddressSection.tsx";
import { IndividualSearchType } from "./types.ts";

export const searchMenuItems: TabsProps['items'] = [
    {
        key: '1',
        label: `CNPJ`,
        children: <SearchSection menu={IndividualSearchType.CNPJ} label="CNPJ" placeholder="Insira o CNPJ para busca" />
    },
    {
        key: '2',
        label: `Raiz CNPJ`,
        children: <SearchSection menu={IndividualSearchType.CNPJ_RAIZ} label="Raiz CNPJ"  />
    },
    {
        key: '3',
        label: `Nome Sócio`,
        children: <SearchSection menu={IndividualSearchType.NOME_SOCIO} label="Nome Sócio" />
    },
    {
        key: '4',
        label: `CPF`,
        children: <SearchSection menu={IndividualSearchType.CPF} label="CPF" placeholder="Insira o CPF para busca" />
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

export const exportSelect: Array<object> = [
    //{value: 'pdf', label: '.pdf'},
    {value: 'xlsx', label: '.xlsx'},
  ]

  export const matrizFilialSelect: Array<object> = [
    {value: '0', label: 'Todos'},
    {value: '1', label: 'Apenas Matriz'},
    {value: '2', label: 'Apenas Filial'},
  ]

  export const porteSelect: Array<object> = [
    {value: '99', label: 'Todos'},
    {value: '00', label: 'Não Informado'},
    {value: '01', label: 'Micro Empresa'},
    {value: '03', label: 'Empresa de Pequeno Porte'},
    {value: '05', label: 'Demais'},
  ]

export const naturezaJuridicaSelect: Array<object> = [
    {
        "value": "0",
        "label": "Todos"
    },
    {
        "value": "0000",
        "label": "0000 - Natureza Jurídica não informada"
    },
    {
        "value": "3271",
        "label": "3271 - Órgão de Direção Local de Partido Político"
    },
    {
        "value": "3280",
        "label": "3280 - Comitê Financeiro de Partido Político"
    },
    {
        "value": "3298",
        "label": "3298 - Frente Plebiscitária ou Referendária"
    },
    {
        "value": "3301",
        "label": "3301 - Organização Social (OS)"
    },
    {
        "value": "3999",
        "label": "3999 - Associação Privada"
    },
    {
        "value": "4014",
        "label": "4014 - Empresa Individual Imobiliária"
    },
    {
        "value": "4090",
        "label": "4090 - Candidato a Cargo Político Eletivo"
    },
    {
        "value": "4120",
        "label": "4120 - Produtor Rural (Pessoa Física)"
    },
    {
        "value": "5010",
        "label": "5010 - Organização Internacional"
    },
    {
        "value": "5029",
        "label": "5029 - Representação Diplomática Estrangeira"
    },
    {
        "value": "1015",
        "label": "1015 - Órgão Público do Poder Executivo Federal"
    },
    {
        "value": "1023",
        "label": "1023 - Órgão Público do Poder Executivo Estadual ou do Distrito Federal"
    },
    {
        "value": "1031",
        "label": "1031 - Órgão Público do Poder Executivo Municipal"
    },
    {
        "value": "1040",
        "label": "1040 - Órgão Público do Poder Legislativo Federal"
    },
    {
        "value": "1058",
        "label": "1058 - Órgão Público do Poder Legislativo Estadual ou do Distrito Federal"
    },
    {
        "value": "1066",
        "label": "1066 - Órgão Público do Poder Legislativo Municipal"
    },
    {
        "value": "1074",
        "label": "1074 - Órgão Público do Poder Judiciário Federal"
    },
    {
        "value": "1082",
        "label": "1082 - Órgão Público do Poder Judiciário Estadual"
    },
    {
        "value": "1104",
        "label": "1104 - Autarquia Federal"
    },
    {
        "value": "1112",
        "label": "1112 - Autarquia Estadual ou do Distrito Federal"
    },
    {
        "value": "1120",
        "label": "1120 - Autarquia Municipal"
    },
    {
        "value": "1139",
        "label": "1139 - Fundação Pública de Direito Público Federal"
    },
    {
        "value": "1147",
        "label": "1147 - Fundação Pública de Direito Público Estadual ou do Distrito Federal"
    },
    {
        "value": "1155",
        "label": "1155 - Fundação Pública de Direito Público Municipal"
    },
    {
        "value": "1163",
        "label": "1163 - Órgão Público Autônomo Federal"
    },
    {
        "value": "1171",
        "label": "1171 - Órgão Público Autônomo Estadual ou do Distrito Federal"
    },
    {
        "value": "1180",
        "label": "1180 - Órgão Público Autônomo Municipal"
    },
    {
        "value": "1198",
        "label": "1198 - Comissão Polinacional"
    },
    {
        "value": "1210",
        "label": "1210 - Consórcio Público de Direito Público (Associação Pública)"
    },
    {
        "value": "1228",
        "label": "1228 - Consórcio Público de Direito Privado"
    },
    {
        "value": "1236",
        "label": "1236 - Estado ou Distrito Federal"
    },
    {
        "value": "1244",
        "label": "1244 - Município"
    },
    {
        "value": "1252",
        "label": "1252 - Fundação Pública de Direito Privado Federal"
    },
    {
        "value": "1260",
        "label": "1260 - Fundação Pública de Direito Privado Estadual ou do Distrito Federal"
    },
    {
        "value": "1279",
        "label": "1279 - Fundação Pública de Direito Privado Municipal"
    },
    {
        "value": "1287",
        "label": "1287 - Fundo Público da Administração Indireta Federal"
    },
    {
        "value": "1295",
        "label": "1295 - Fundo Público da Administração Indireta Estadual ou do Distrito Federal"
    },
    {
        "value": "1309",
        "label": "1309 - Fundo Público da Administração Indireta Municipal"
    },
    {
        "value": "1317",
        "label": "1317 - Fundo Público da Administração Direta Federal"
    },
    {
        "value": "1325",
        "label": "1325 - Fundo Público da Administração Direta Estadual ou do Distrito Federal"
    },
    {
        "value": "1333",
        "label": "1333 - Fundo Público da Administração Direta Municipal"
    },
    {
        "value": "1341",
        "label": "1341 - União"
    },
    {
        "value": "2011",
        "label": "2011 - Empresa Pública"
    },
    {
        "value": "2038",
        "label": "2038 - Sociedade de Economia Mista"
    },
    {
        "value": "2046",
        "label": "2046 - Sociedade Anônima Aberta"
    },
    {
        "value": "2054",
        "label": "2054 - Sociedade Anônima Fechada"
    },
    {
        "value": "2062",
        "label": "2062 - Sociedade Empresária Limitada"
    },
    {
        "value": "2070",
        "label": "2070 - Sociedade Empresária em Nome Coletivo"
    },
    {
        "value": "2089",
        "label": "2089 - Sociedade Empresária em Comandita Simples"
    },
    {
        "value": "2097",
        "label": "2097 - Sociedade Empresária em Comandita por Ações"
    },
    {
        "value": "2100",
        "label": "2100 - Sociedade Mercantil de Capital e Indústria"
    },
    {
        "value": "2127",
        "label": "2127 - Sociedade em Conta de Participação"
    },
    {
        "value": "2135",
        "label": "2135 - Empresário (Individual)"
    },
    {
        "value": "2143",
        "label": "2143 - Cooperativa"
    },
    {
        "value": "2151",
        "label": "2151 - Consórcio de Sociedades"
    },
    {
        "value": "2160",
        "label": "2160 - Grupo de Sociedades"
    },
    {
        "value": "2178",
        "label": "2178 - Estabelecimento, no Brasil, de Sociedade Estrangeira"
    },
    {
        "value": "2194",
        "label": "2194 - Estabelecimento, no Brasil, de Empresa Binacional Argentino-Brasileira"
    },
    {
        "value": "2216",
        "label": "2216 - Empresa Domiciliada no Exterior"
    },
    {
        "value": "2224",
        "label": "2224 - Clube/Fundo de Investimento"
    },
    {
        "value": "2232",
        "label": "2232 - Sociedade Simples Pura"
    },
    {
        "value": "2240",
        "label": "2240 - Sociedade Simples Limitada"
    },
    {
        "value": "2259",
        "label": "2259 - Sociedade Simples em Nome Coletivo"
    },
    {
        "value": "2267",
        "label": "2267 - Sociedade Simples em Comandita Simples"
    },
    {
        "value": "2275",
        "label": "2275 - Empresa Binacional"
    },
    {
        "value": "2283",
        "label": "2283 - Consórcio de Empregadores"
    },
    {
        "value": "2291",
        "label": "2291 - Consórcio Simples"
    },
    {
        "value": "2305",
        "label": "2305 - Empresa Individual de Responsabilidade Limitada (de Natureza Empresária)"
    },
    {
        "value": "2313",
        "label": "2313 - Empresa Individual de Responsabilidade Limitada (de Natureza Simples)"
    },
    {
        "value": "2321",
        "label": "2321 - Sociedade Unipessoal de Advocacia"
    },
    {
        "value": "2330",
        "label": "2330 - Cooperativas de Consumo"
    },
    {
        "value": "2348",
        "label": "2348 - Empresa Simples de Inovação"
    },
    {
        "value": "3034",
        "label": "3034 - Serviço Notarial e Registral (Cartório)"
    },
    {
        "value": "3069",
        "label": "3069 - Fundação Privada"
    },
    {
        "value": "3077",
        "label": "3077 - Serviço Social Autônomo"
    },
    {
        "value": "3085",
        "label": "3085 - Condomínio Edilício"
    },
    {
        "value": "3107",
        "label": "3107 - Comissão de Conciliação Prévia"
    },
    {
        "value": "3115",
        "label": "3115 - Entidade de Mediação e Arbitragem"
    },
    {
        "value": "3131",
        "label": "3131 - Entidade Sindical"
    },
    {
        "value": "3204",
        "label": "3204 - Estabelecimento, no Brasil, de Fundação ou Associação Estrangeiras"
    },
    {
        "value": "3212",
        "label": "3212 - Fundação ou Associação Domiciliada no Exterior"
    },
    {
        "value": "3220",
        "label": "3220 - Organização Religiosa"
    },
    {
        "value": "3239",
        "label": "3239 - Comunidade Indígena"
    },
    {
        "value": "3247",
        "label": "3247 - Fundo Privado"
    },
    {
        "value": "3255",
        "label": "3255 - Órgão de Direção Nacional de Partido Político"
    },
    {
        "value": "3263",
        "label": "3263 - Órgão de Direção Regional de Partido Político"
    },
    {
        "value": "5037",
        "label": "5037 - Outras Instituições Extraterritoriais"
    },
    {
        "value": "3328",
        "label": "3328 - Plano de Benefícios de Previdência Complementar Fechada"
    },
    {
        "value": "8885",
        "label": "8885 - Natureza Jurídica não informada"
    }
]