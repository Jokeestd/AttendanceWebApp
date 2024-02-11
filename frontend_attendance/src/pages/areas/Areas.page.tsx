import { useEffect, useState } from "react";
import "./areas.scss";
import httpModule from "../../helpers/http.module";
import { IArea } from "../../types/global.typing";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AreasGrid from "../../components/areas/AreasGrid.component";

const Areas = () => {
  const [areas, setAreas] = useState<IArea[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IArea[]>("/Area/Get")
      .then((response) => {
        setAreas(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
        setLoading(false);
      });
  }, []);

  //console.log(areas);
  return (
    <div className="content areas">
      <div className="heading">
        <h2>Areas</h2>
        <Button variant="outlined" onClick={() => redirect("/areas/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : areas.length === 0 ? (
        <h1>No Areas</h1>
      ) : (
        <AreasGrid data={areas} />
      )}
    </div>
  );
};

export default Areas;
