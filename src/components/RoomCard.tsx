import { Room } from "@/app/salas/types";
import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
  room: Room;
}

const RoomCard = ({ room }: Props) => {
  const { name, players } = room;
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          {name}
        </Typography>
        <Typography component="h2" variant="h6" align="center">
          {players?.length} jogadores
        </Typography>
      </Paper>
    </Box>
  );
};

export default RoomCard;
