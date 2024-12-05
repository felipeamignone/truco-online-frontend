import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const CreateRoomDialog = ({ isOpen, onClose, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    clearErrors,
    handleSubmit,
  } = useForm<{ name: string }>({
    defaultValues: { name: "" },
  });

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Criar sala</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(({ name }) => onSubmit(name))}>
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
          <DialogActions>
            <Button variant="text" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="contained" type="submit">
              Criar
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomDialog;
