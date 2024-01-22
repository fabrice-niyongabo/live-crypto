import { w3cwebsocket } from "websocket";

let socketClient: w3cwebsocket;
let socketStore: any = undefined;

export const subscribeToSocket = (store: any) => {
  socketStore = store;

  if (socketClient !== undefined) {
    return;
  }

  socketClient = new w3cwebsocket("wss://ws.coinapi.io/v1/", "echo-protocol");

  // Event handler for when the connection is opened
  socketClient.onopen = function () {
    console.log("WebSocket connection opened....");

    // Sending a message after the connection is opened

    const message = {
      type: "hello",
      apikey: "6372DCEF-4120-4E11-8E64-52A56C6488DB",
      heartbeat: false,
      subscribe_data_type: ["trade"],
      subscribe_filter_symbol_id: [
        "BITSTAMP_SPOT_BTC_USD$",
        "BITFINEX_SPOT_BTC_LTC$",
        "COINBASE_",
        "ITBIT_",
      ],
    };
    socketClient.send(message);
  };

  socketClient.onerror = function (error) {
    console.log("Connection Error", error);
  };
};

export const unSubscribeToSocket = () => {
  socketClient.close();
  console.log("Socket Disconnected");
};
