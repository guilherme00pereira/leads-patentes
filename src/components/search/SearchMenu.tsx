import {Tabs} from 'antd'
import {searchMenuItems} from '../../config/data.tsx'
import {useContext} from 'react'
import {FormActionContext} from '../../config/context.tsx'

const SearchMenu = () => {
  const {setRenderTable, setTableData, setBlank, setLoading} = useContext(FormActionContext)
  const onChange = () => {
    setRenderTable(false)
    setTableData([])
    setBlank(true)
    setLoading(false)
  }

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={searchMenuItems}
        onChange={onChange}
        centered
        tabBarStyle={{color: '#1EAE93'}}
      />
    </div>
  );
};

export default SearchMenu;