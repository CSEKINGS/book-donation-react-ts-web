import * as io from "socket.io-client";
import * as Constants from "src/constants";

export const socket = io.connect(Constants.API_CONFIG.baseURL);
