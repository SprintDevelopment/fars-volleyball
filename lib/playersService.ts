import api from "./api";
import { Player, PlayerUpdate } from "./schemas/player-schema";

export const getPlayers = async () => {
  const response = await api.get("/players");
  return response.data;
};

export const getPlayer = async (id: string) => {
  const response = await api.get(`/players/${id}`);
  return response.data;
};

export const createPlayer = async (player: Player) => {
  return await api.post("/players", player);
};

export const updatePlayer = async (player: PlayerUpdate) => {
  return await api.patch("/players", player);
}