import { useState, useEffect } from "react";
import "./attendanceRecord.scss";
import {
  ICreateAttendanceRecordDto,
  IEmployee,
} from "../../types/global.typing";
import TextField from "@mui/material/TextField/TextField";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import httpModule from "../../helpers/http.module";
import moment from "moment";

const AddAttendanceRecord = () => {
  const [attendance, setAttendance] = useState<ICreateAttendanceRecordDto>({
    time: "",
    obs: "",
    tipo: "",
    idEmployee: "",
  });

  //moment(clock).format("YYYY-MM-DD[T]HH:mm:ss")
  //   setAttendance({
  //     ...attendance,
  //     time: moment(clock).format("YYYY-MM-DD[T]HH:mm:ss"),
  //   });
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  //Get employees
  useEffect(() => {
    httpModule
      .get<IEmployee[]>("/Employee/Get")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  //Clock for Attendance registration
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setClock(currentTime);
      setAttendance((prevAttendance) => ({
        ...prevAttendance,
        time: moment(currentTime).format("YYYY-MM-DD[T]HH:mm:ss"),
      }));
    }, 1000);

    return () => clearInterval(intervalId); //to avoid memory leaks and performance
  }, []);

  const formattedTime = clock.toLocaleTimeString();

  const handleClickSaveBtn = () => {
    if (
      attendance.idEmployee === "" ||
      attendance.tipo === "" ||
      attendance.time === ""
    ) {
      console.log(attendance);
      alert("completar todos los campos");
      return;
    }
    console.log(attendance);
    httpModule
      .post("/AttendanceRecord/Create", attendance)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    //redirect("/employees");
  };

  return (
    <div className="content">
      <h2>Registrar Asistencia</h2>
      <div className="add-attendanceRecord">
        <Box sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel>Usuario</InputLabel>
            <Select
              value={attendance.idEmployee}
              label="Usuario"
              onChange={(e) =>
                setAttendance({ ...attendance, idEmployee: e.target.value })
              }
            >
              {employees.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel>Tipo</InputLabel>
            <Select
              value={attendance.tipo}
              label="Tipo"
              onChange={(e) =>
                setAttendance({ ...attendance, tipo: e.target.value })
              }
            >
              <MenuItem value="Entrada">Entrada</MenuItem>
              <MenuItem value="Salida">Salida</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          autoComplete="off"
          label="Observación"
          variant="outlined"
          value={attendance.obs}
          onChange={(e) =>
            setAttendance({ ...attendance, obs: e.target.value })
          }
        />
        <TextField
          label="Hora"
          variant="filled"
          value={formattedTime}
          /*onChange={(e) =>
            setAttendance({ ...attendance, time: e.target.value })
          }*/
          InputProps={{
            readOnly: true,
          }}
        />

        <div className="btns">
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Registrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddAttendanceRecord;
