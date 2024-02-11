import { useState, useEffect } from "react";
import "./employees.scss";
import { IArea, ICreateEmployeeDto } from "../../types/global.typing";
import TextField from "@mui/material/TextField/TextField";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddEmployee = () => {
  const [employee, setEmployee] = useState<ICreateEmployeeDto>({
    firstName: "",
    lastName: "",
    username: "",
    dni: "",
    email: "",
    idArea: "",
  });

  const [areas, setAreas] = useState<IArea[]>([]);

  const redirect = useNavigate();

  useEffect(() => {
    httpModule
      .get<IArea[]>("/Area/Get")
      .then((response) => {
        setAreas(response.data);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  }, []);

  const handleClickSaveBtn = () => {
    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.dni === "" ||
      employee.idArea === ""
    ) {
      alert("completar todos los campos");
      return;
    }
    httpModule
      .post("/Employee/Create", employee)
      .then((response) => redirect("/employees"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/employees");
  };

  const [error, setError] = useState(false);

  const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Regular expression to match only numeric characters
    const numericRegex = /^[0-9]*$/;
    if (numericRegex.test(inputValue)) {
      // Update the employee state only if the input consists of numeric characters
      setEmployee({ ...employee, dni: inputValue });
      setError(false); // Clear the error state if input is valid
    } else {
      setError(true); // Set the error state if input contains non-numeric characters
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Check if has exactly 8 characters
    if (inputValue.length === 8) {
      setError(false); // Clear the error state if input is valid
    } else {
      setError(true); // Set the error state if input does not meet validation criteria
    }
  };

  return (
    <div className="content">
      <div className="add-employee">
        <h2>Añadir Nuevo Empleado</h2>
        <TextField
          required
          autoComplete="off"
          label="Nombres"
          variant="outlined"
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
        />
        <TextField
          required
          autoComplete="off"
          label="Apellidos"
          variant="outlined"
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Usuario"
          variant="outlined"
          value={employee.username}
          onChange={(e) =>
            setEmployee({ ...employee, username: e.target.value })
          }
        />
        <TextField
          required
          autoComplete="off"
          label="DNI"
          value={employee.dni}
          //onChange={(e) => setEmployee({ ...employee, dni: e.target.value })}
          onChange={handleValidation}
          onBlur={handleBlur}
          error={error}
          helperText={error ? "Ingrese 8 caracteres numéricos" : ""}
          inputProps={{ maxLength: 8 }}
          /*InputLabelProps={{
            shrink: true,
          }}*/
        />
        <TextField
          autoComplete="off"
          label="Correo electrónico"
          variant="outlined"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        />
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel>Area</InputLabel>
            <Select
              value={employee.idArea}
              label="Area"
              onChange={(e) =>
                setEmployee({ ...employee, idArea: e.target.value })
              }
            >
              {areas.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.areaName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="btns">
        <Button variant="outlined" color="primary" onClick={handleClickSaveBtn}>
          Save
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClickBackBtn}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AddEmployee;
