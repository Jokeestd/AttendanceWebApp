import { useState } from "react";
import "./areas.scss";
import { ICreateAreaDto } from "../../types/global.typing";
import TextField from "@mui/material/TextField/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddArea = () => {
  const [area, setArea] = useState<ICreateAreaDto>({
    areaName: "",
    officeNumber: "",
  });

  const redirect = useNavigate();

  const handleClickSaveBtn = () => {
    if (area.areaName === "" || area.officeNumber === "") {
      alert("completar todos los campos");
      return;
    }
    httpModule
      .post("/Area/Create", area)
      .then((response) => redirect("/areas"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/areas");
  };
  return (
    <div className="content">
      <div className="add-area">
        <h2>Añadir Nueva Area</h2>
        <TextField
          required
          autoComplete="off"
          label="Nombre de Area"
          variant="outlined"
          value={area.areaName}
          onChange={(e) => setArea({ ...area, areaName: e.target.value })}
        />
        <TextField
          //autoComplete="off"
          label="Nro. Oficina"
          type="number"
          value={area.officeNumber}
          onChange={(e) => setArea({ ...area, officeNumber: e.target.value })}
          /*InputLabelProps={{
            shrink: true,
          }}*/
        />
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

export default AddArea;
