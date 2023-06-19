import { Typography, theme } from 'antd'

const { Title } = Typography;
const { useToken } = theme;
interface FormSectionTitleProps {
  title: string;
}

const FormSectionTitle = ({title}: FormSectionTitleProps) => {
  const { token } = useToken();

  return <Title level={2} style={{ color: token.colorPrimary}}>{title}</Title>
};

export default FormSectionTitle;