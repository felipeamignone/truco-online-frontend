import { IUser } from "@/types/userTypes";

export interface Room {
  id: string;
  name: string;
  ownerId: string;
  players?: IUser[];
}

export interface RoomState {
  rooms: Room[];
  madeInitialFetch: boolean;
  isOpenCreateDialog: boolean;
}
