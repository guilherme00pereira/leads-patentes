import { Button } from "antd";
import { MdOutlineSearch } from 'react-icons/md'

interface SubmitButtonProps {
  isSearch?: boolean;
  text: string;
  onClick: () => void;
}

const SubmitButton = ({text, isSearch, onClick}: SubmitButtonProps) => {
  return (
    <Button
      type="primary"
      size="large"
      icon={isSearch ? <MdOutlineSearch /> : null}
      className="form-button"
      style={{
        padding: '0 14px',
        marginTop: '32px',
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;