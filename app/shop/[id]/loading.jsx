import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const loading = () => {
  return (
    <div className="flex justify-center mt-10">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default loading;
