import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid>
            <Typography variant="h3">Productos</Typography>
            <Typography variant="h3">Rubias</Typography>
            <Typography variant="h3">Rojas</Typography>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
