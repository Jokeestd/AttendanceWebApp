import "./areas-grid.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import moment from "moment";
import { IArea } from "../../types/global.typing";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "areaName", headerName: "Nombre", width: 200 },
  { field: "officeNumber", headerName: "Nro Oficina.", width: 100 },
  {
    field: "createdAt",
    headerName: "Fecha de Creación",
    width: 200,
    renderCell: (params) => moment(params.row.createdAt).format("DD-MM-YYYY"),
  },
];
interface IAreaGridProps {
  data: IArea[];
}
const AreasGrid = ({ data }: IAreaGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="areas-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default AreasGrid;
