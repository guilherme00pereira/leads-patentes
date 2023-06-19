import { Typography, Spin } from 'antd';
import { Loading3QuartersOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoadingSpinner = <Loading3QuartersOutlined style={{ fontSize: 64, color: "#00AFCE" }} spin />;

const Loading = () => {
  return (
    <div className="loading">
      <Title level={3}>Buscando resultados</Title>
      <Spin indicator={LoadingSpinner}/>
    </div>
  );
};

export default Loading;