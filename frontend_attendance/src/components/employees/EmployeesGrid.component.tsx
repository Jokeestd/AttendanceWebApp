import "./employees-grid.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import moment from "moment";
import { IEmployee } from "../../types/global.typing";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "firstName", headerName: "Nombres", width: 200 },
  { field: "lastName", headerName: "Apellidos", width: 300 },
  { field: "username", headerName: "Usuario", width: 100 },
  { field: "dni", headerName: "DNI", width: 100 },
  { field: "email", headerName: "Email", width: 400 },
  { field: "areaName", headerName: "Area", width: 150 },
  {
    field: "createdAt",
    headerName: "Fecha de Creación",
    width: 200,
    renderCell: (params) => moment(params.row.createdAt).fromNow(),
  },
];

interface IEmployeesGridProps {
  data: IEmployee[];
}
const EmployeesGrid = ({ data }: IEmployeesGridProps) => {
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

export default EmployeesGrid;
