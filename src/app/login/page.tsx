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
import useLogin from "./useLogin";
import { Controller, useForm } from "react-hook-form";
import { FormValues } from "./types";

const LoginPage = () => {
  const { handleLogin } = useLogin();

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => handleLogin(data));

  return (
    <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={onSubmit}>
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
            Entrar
          </Button>
        </form>
        <Box display="flex" justifyContent="center">
          <Link href="/cadastro" passHref>
            <Button variant="text" color="primary">
              Não possui uma conta? Registre-se
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
