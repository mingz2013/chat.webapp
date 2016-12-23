/**
 * Created by zhaojm on 07/10/2016.
 */

import io from 'socket.io-client'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        this.ws_uri = 'http://127.0.0.1:5000/chat';
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        const socket = io.connect(this.ws_uri);
        socket.on('connect', this._onConnect.bind(this));
        //socket.on('event', this._onEvent.bind(this));
        socket.on('disconnect', this._onDisconnect.bind(this));
        socket.on("heartbeat", this._onHeartbeat.bind(this));
        this.socket = socket;

    }


    _onConnect(e) {
        console.log(e);
        console.log("Connected to " + this.ws_uri);
        //this.socket.request
        console.log(this.socket);
        console.log(this.socket.request);
    }

    //_onEvent(data) {
    //    console.log(data);
    //    console.log("Got echo: " + data);
    //}

    _onDisconnect(e) {
        console.log(e);
        this.socket.close();
        //this.sock = null;
    }

    _onHeartbeat(e) {
        console.log("on heart beat..");
        console.log(e);
    }

    on(ev, fn) {
        this.socket.on(ev, fn);
    }

    sendPacket(packet) {
        console.log("sendPacket->");
        console.log(packet);
        //this.socket.emit(packet.cmd, packet.packet);
        this.socket.send(packet.packet);
    }

    //emit(type, packet) {
    //    console.log("emit:->");
    //    console.log(packet.packet);
    //    this.socket.emit(type, packet.packet);
    //}
}

