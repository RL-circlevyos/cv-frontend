import { io } from "socket.io-client";
const socket = io(`ws://localhost:3699`, {
  withCredentials: true,
});

export const useSocket = () => {
  return socket;
};
