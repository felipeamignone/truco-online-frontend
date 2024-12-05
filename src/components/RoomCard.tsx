import { Room } from "@/app/salas/types";
import { Button, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  room: Room;
  handleEnterRoom: (roomId: string) => void;
}

const RoomCard = ({ room, handleEnterRoom }: Props) => {
  const { name, players } = room;

  const amountPlayers = players?.length || 0;
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography component="h1" variant="body1" gutterBottom>
            <b>Nome da sala:</b> {name}
          </Typography>
          <Typography component="h2" variant="body1">
            <b>Jogadores:</b> {amountPlayers}/4
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => handleEnterRoom(room.id)}
          disabled={amountPlayers === 4}
        >
          Entrar
        </Button>
      </Box>
    </Paper>
  );
};

export default RoomCard;
