import { useCallback, useState } from "react";
import { RoomState } from "./types";
import HttpClient from "@/utils/httpClient";
import useAuthContext from "@/contexts/authContext";

const initialState: RoomState = {
  rooms: [],
  madeInitialFetch: false,
  isOpenCreateDialog: false,
};

const httpClient = new HttpClient();

const useRoom = () => {
  const {
    state: { userLogged },
  } = useAuthContext();
  const [state, setState] = useState<RoomState>(initialState);

  const handleState = (changes: Partial<RoomState>) =>
    setState((oldState) => ({ ...oldState, ...changes }));

  const fetchRooms = useCallback(async () => {
    try {
      const { data } = await httpClient.get("room");
      handleState({ rooms: data, madeInitialFetch: true });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleOpenCreateDialog = () =>
    handleState({ isOpenCreateDialog: true });
  const handleCloseCreateDialog = () =>
    handleState({ isOpenCreateDialog: false });

  const handleCreateRoom = async (name: string) => {
    try {
      const { data } = await httpClient.post("room", {
        name,
        ownerId: userLogged?.id,
      });

      if (data) {
        handleState({
          madeInitialFetch: false,
          isOpenCreateDialog: false,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    state,
    handleState,
    fetchRooms,
    handleOpenCreateDialog,
    handleCloseCreateDialog,
    handleCreateRoom,
  };
};

export default useRoom;
