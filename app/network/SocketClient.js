/**
 * Created by zhaojm on 07/10/2016.
 */

import io from 'socket.io-client'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        const socket = io.connect(this.ws_uri);
        socket.on('connect', this._onConnect.bind(this));
        socket.on('event', this._onEvent.bind(this));
        socket.on('disconnect', this._onDisconnect.bind(this));
        this.socket = socket;

    }


    _onConnect(e) {
        console.log(e);
        console.log("Connected to " + this.ws_uri);
    }

    _onEvent(data) {
        console.log(data);
        console.log("Got echo: " + data);
    }

    _onDisconnect(e) {
        console.log("Connection closed (wasClean = " + e.wasClean + ", code = " + e.code + ", reason = '" + e.reason + "')");
        this.socket.close();
        //this.sock = null;
    }

    on(ev, fn) {
        this.socket.on(ev, fn);
    }

    emit() {
        this.socket.emit()
    }
}

