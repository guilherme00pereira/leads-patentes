import { exportSelect } from "../config/data.tsx";
import { Select } from "antd";
import { Excel } from "antd-table-saveas-excel";
import { PreTableParams } from "../config/types.ts";

const PreTable = (props: PreTableParams) => {
  
    const handleChange = (value: string) => {
    if (value === "xlsx") {
      const excel = new Excel();
      excel
        .addSheet("export")
        .addColumns(props.columns)
        .addDataSource(props.dataSource)
        .saveAs("export.xlsx");
    }
  };

  return (
    <div className="pretable">
      <div>Total de {props.total.toString()} ocorrencias</div>
      <div>
        <Select
          allowClear
          style={{ width: "200px" }}
          placeholder="Exportar dados"
          onChange={handleChange}
          options={exportSelect}
        />
      </div>
    </div>
  );
};

export default PreTable;
