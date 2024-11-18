"use client";
import React from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

const RegisterPage = () => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add login logic here
    console.log("Logging in...");
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Cadastro
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Box display="flex" justifyContent="center">
            <Link href="/cadastro" passHref>
              <Button variant="text" color="primary">
                Não possui uma conta? Registre-se
              </Button>
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
