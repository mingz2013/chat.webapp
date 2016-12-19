/**
 * Created by zhaojm on 07/10/2016.
 */

import io from 'socket.io-client'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        const socket = io.connect("ws://localhost:9000");
        socket.on('connect', function () {
        });
        socket.on('event', function (data) {
        });
        socket.on('disconnect', function () {
        });
        this.socket = socket;

    }


    _onOpen(e) {
        console.log(e);
        console.log("Connected to " + this.ws_uri);
    }

    _onClose(e) {
        console.log("Connection closed (wasClean = " + e.wasClean + ", code = " + e.code + ", reason = '" + e.reason + "')");
        this.socket.close();
        //this.sock = null;
    }

    _onMessage(e) {
        console.log(e);
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

