import { Server as SocketIO } from 'socket.io';
import registerHandler from '../handlers/register.handler.js';
// import { getGameAssets } from '../src/init/assets.js';

// const { stages } = getGameAssets();

const initSocket = (server) => {
  const io = new SocketIO();
  io.attach(server);
  registerHandler(io);
};

export default initSocket;
