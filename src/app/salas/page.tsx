"use client";

import React, { useEffect } from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import useRoom from "./useRoom";
import RoomCard from "@/components/RoomCard";
import CreateRoomDialog from "@/components/CreateRoomDialog";
import PrivatePageWrapper from "@/components/PrivatePageWrapper";

const RoomsPage = () => {
  const {
    state: { rooms, madeInitialFetch, isOpenCreateDialog },
    fetchRooms,
    handleOpenCreateDialog,
    handleCloseCreateDialog,
    handleCreateRoom,
    handleEnterRoom,
  } = useRoom();

  useEffect(() => {
    if (!madeInitialFetch) {
      fetchRooms();
    }
  }, [madeInitialFetch, fetchRooms]);

  return (
    <PrivatePageWrapper>
      <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box display="flex" justifyContent="space-between">
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              Salas
            </Typography>
            <Box display="flex" gap={1}>
              <Button
                variant="text"
                size="small"
                color="primary"
                onClick={fetchRooms}
              >
                Atualizar salas
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={handleOpenCreateDialog}
              >
                Criar sala
              </Button>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" gap={2} mt={4}>
            {rooms?.length > 0 ? (
              rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  handleEnterRoom={handleEnterRoom}
                />
              ))
            ) : (
              <Typography variant="body1" align="center">
                Nenhuma sala encontrada
              </Typography>
            )}
          </Box>
        </Paper>
        <CreateRoomDialog
          isOpen={isOpenCreateDialog}
          onClose={handleCloseCreateDialog}
          onSubmit={handleCreateRoom}
        />
      </Container>
    </PrivatePageWrapper>
  );
};

export default RoomsPage;
