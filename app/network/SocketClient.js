/**
 * Created by zhaojm on 07/10/2016.
 */
class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        if ("WebSocket" in window) {
            this.socket = new WebSocket(this.ws_uri);
        } else if ("MozWebSocket" in window) {
            this.socket = new MozWebSocket(this.ws_uri);
        } else {
            console.log("Browser does not support WebSocket!");
        }

        if (this.socket) {
            this.socket.onopen = this._onOpen;
            this.socket.onclose = this._onClose;
            this.socket.onmessage = this._onMessage;
            this.socket.onerror = this._onError;
        }
    }

    _onOpen(e) {
        console.log(e);
        console.log("Connected to " + e.currentTarget.url);
    }

    _onClose(e) {
        console.log("Connection closed (wasClean = " + e.wasClean + ", code = " + e.code + ", reason = '" + e.reason + "')");
        this.socket.close();
        //this.sock = null;
    }

    _onMessage(e) {
        console.log("Got echo: " + e.data);
    }

    _onError(e) {
        console.log("on error");
    }

    sendPacket(packet) {

        if (this.socket) {
            this.socket.send(packet.as_json());
            console.log("Sent: " + packet.as_json());
        } else {
            console.log("Not connected.");
        }
    }

    closeConnect() {
        this.socket.close();
        //this.sock = null;
    }
}

export default SocketClient;