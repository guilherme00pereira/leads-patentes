import { useEffect } from "react";
import HeaderSection from "../components/HeaderSection";
import { Table } from "antd";

const RenderCheckbox = ({value}: {value: string}) => {
  return (<div style={{textAlign: "center"}}>
    <input type="checkbox" checked={value === '1'}/>
  </div>)
}

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      mail: 'mike@MdBikeScooter.com',
      mod1: '1',
      mod2: '1',
      mod3: '0',
    },
    {
      key: '2',
      name: 'John',
      mail: 'john@MdBikeScooter.com',
      mod1: '1',
      mod2: '0',
      mod3: '1',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'E-mail',
      dataIndex: 'mail',
      key: 'mail',
    },
    {
      title: 'Acesso Módulo 1',
      dataIndex: 'mod1',
      key: 'mod1',
      render: (v: string) => <RenderCheckbox value={v} />
    },
    {
        title: 'Acesso Módulo 2',
        dataIndex: 'mod2',
        key: 'mod2',
        render: (v: string) => <RenderCheckbox value={v} />
      },
      {
        title: 'Acesso Módulo 3',
        dataIndex: 'mod3',
        key: 'mod3',
        render: (v: string) => <RenderCheckbox value={v} />
      },
      {
        title: 'Ações',
        dataIndex: 'actions',
        key: 'actions',
        render: () => (
            <div>
                <a href="#">Salvar</a>
            </div>
        )
      }
  ];


const Settings = () => {

    useEffect(() => {
       
    }, []);

    return (
        <div className="main-container">
            <HeaderSection title="Administrativo" />
            <div className="table-administrative">
                <Table columns={columns} dataSource={dataSource} />
            </div>
        </div>
    );
};

export default Settings;