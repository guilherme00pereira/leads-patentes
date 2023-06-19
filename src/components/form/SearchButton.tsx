import { Button } from "antd";
import { MdOutlineSearch } from 'react-icons/md'

const SearchButton = () => {
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
    >
      Buscar
    </Button>
  );
};

export default SearchButton;