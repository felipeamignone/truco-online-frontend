import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const HomePage = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h4" color="primary">
          Bem vindo ao FIPP TRUCO
        </Typography>
        <Link href="/login" passHref>
          <Button variant="contained">Login</Button>
        </Link>
      </Paper>
    </Container>
  );
};

export default HomePage;
