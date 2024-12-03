"use client";

import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const RoomsPage = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Salas
        </Typography>
      </Paper>
    </Container>
  );
};

export default RoomsPage;
