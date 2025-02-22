import api from "./api";
import { Player } from "./schemas/player-schema";

export const getPlayers = async () => {
  const response = await api.get("/players");
  return response.data;
};

export const createPlayer = async (player: Player) => {
  return await api.post("/players", player);
};