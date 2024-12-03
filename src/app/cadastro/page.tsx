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
import UseRegister from "./useRegister";
import { FormValues } from "./types";
import { Controller, useForm } from "react-hook-form";

const RegisterPage = () => {
  const { handleRegister } = UseRegister();

  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => handleRegister(data));

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Cadastro
        </Typography>
        <form onSubmit={onSubmit}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                id="name"
                label="Nome"
                autoComplete="name"
                autoFocus
                onFocus={() => clearErrors("name")}
                error={Boolean(errors.name)}
                helperText={Boolean(errors.name) && "Campo obrigatório"}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                autoComplete="email"
                onFocus={() => clearErrors("email")}
                error={Boolean(errors.email)}
                helperText={Boolean(errors.email) && "Campo obrigatório"}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                onFocus={() => clearErrors("password")}
                error={Boolean(errors.password)}
                helperText={Boolean(errors.password) && "Campo obrigatório"}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
        </form>
        <Box display="flex" justifyContent="center">
          <Link href="/login" passHref>
            <Button variant="text" color="primary">
              Já possui uma conta? Clique aqui para entrar
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
