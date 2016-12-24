/**
 * Created by zhaojm on 07/10/2016.
 */

import eio from 'engine.io-client'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        this.ws_uri = 'ws://127.0.0.1:5000';
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        this.socket = eio(this.ws_uri);
        this.socket.on('open', function () {
            console.log("on open...");
            this.socket.on('message', this._onMessage.bind(this));
            this.socket.on('close', this._onClose.bind(this));

            //this.socket.send(JSON.stringify({
            //    "cmd": "login",
            //    "data": "hello"
            //}));
        }.bind(this));

    }


    _onMessage(data) {
        console.log("on message...");
        console.log(data);
    }


    _onClose(e) {
        console.log("on close...");
        console.log(e);
    }

    sendPacket(packet) {
        console.log("sendPacket->");
        console.log(packet);
        //this.socket.emit(packet.cmd, packet.packet);
        this.socket.send(packet.as_json());
    }

}

