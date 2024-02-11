import { useEffect, useState } from "react";
import "./attendanceRecord.scss";
import httpModule from "../../helpers/http.module";
import { IAttendanceRecord } from "../../types/global.typing";
import { CircularProgress } from "@mui/material";
import AttendanceGrid from "../../components/attendance/AttendanceGrid.component";
import AddAttendanceRecord from "./AddAttendanceRecord.page";

const AttendanceRecords = () => {
  const [attedanceRecords, setAttendanceRecords] = useState<
    IAttendanceRecord[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IAttendanceRecord[]>("/AttendanceRecord/Get")
      .then((response) => {
        setAttendanceRecords(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  //console.log(attedanceRecords);
  return (
    <div className="content attendanceRecords">
      <div className="heading">
        <AddAttendanceRecord />
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : attedanceRecords.length === 0 ? (
        <h1>No Company</h1>
      ) : (
        <AttendanceGrid data={attedanceRecords} />
      )}
    </div>
  );
};

export default AttendanceRecords;
