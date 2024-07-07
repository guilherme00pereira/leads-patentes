import { useState } from "react";
import { Button, Space, Table, Modal } from "antd";
import { projectTableResultData } from "../../config/data";

const ProjectsResultTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      width: "30%",
    },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return <span className={`project-table-status-${status.toLowerCase().replace(" ", "-")}`}>{status}</span>;
      },
    },
    {
      title: "",
      key: "acoes",
      render: () => (
        <Space size="middle">
          <Button type="primary">Abrir</Button>
          <Button type="primary" danger onClick={showModal}>
            Excluir
          </Button>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-table-wrapper">
      <Table
        pagination={{ position: ["bottomCenter"] }}
        dataSource={projectTableResultData}
        columns={columns}
        rowKey="id"
        scroll={{ x: true }}
      />
      <Modal
        title="Deseja excluir este projeto?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" danger onClick={handleOk}>
            Excluir
          </Button>,
        ]}
      >
      </Modal>
    </div>
  );
};

export default ProjectsResultTable;
