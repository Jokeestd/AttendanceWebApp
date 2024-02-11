import { Stack, CircularProgress } from "@mui/material";

const CustomCircularProgress = () => {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack>
  );
};

export default CustomCircularProgress;
