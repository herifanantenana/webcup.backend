import connectDatabase from "./src/config/database.js";
import { server, PORT } from "./src/server.js"
// NOTE: ❕ import your socket.io file 

connectDatabase();

server.listen(PORT);