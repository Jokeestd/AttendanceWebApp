import "./attendance-grid.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import moment from "moment";
import { IAttendanceRecord } from "../../types/global.typing";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "username", headerName: "Usuario", width: 200 },
  {
    field: "time",
    headerName: "Hora y Fecha",
    width: 250,
    renderCell: (params) =>
      moment(params.row.time).format("hh:mm:ss A [...] DD-MMM"),
  },
  { field: "tipo", headerName: "Tipo", width: 150 },
  { field: "obs", headerName: "Observación.", width: 150 },
  {
    field: "createdAt",
    headerName: "Fecha de Registro",
    width: 250,
    renderCell: (params) => moment(params.row.createdAt).fromNow(),
  },
];
interface IAttendanceGridProps {
  data: IAttendanceRecord[];
}
const AttendanceGrid = ({ data }: IAttendanceGridProps) => {
  return (
    <Box sx={{ width: "100%", height: 450 }} className="attendance-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default AttendanceGrid;
