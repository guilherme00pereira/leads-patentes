import { Button } from "antd";
import { MdOutlineSearch } from 'react-icons/md'

const SubmitButton = (props: {onClick:()=>void}) => {
  return (
    <Button
      type="primary"
      size="large"
      icon={<MdOutlineSearch />}
      className="form-button"
      style={{
        width: '120px',
        padding: '0 14px',
        marginTop: '32px',
      }}
      onClick={props.onClick}
    >
      Buscar
    </Button>
  );
};

export default SubmitButton;