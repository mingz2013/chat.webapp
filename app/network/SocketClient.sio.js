/**
 * Created by zhaojm on 27/12/2016.
 */

import sio from 'socket.io-client'
import eventDispatcher from './EventDispatcher'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        //this.ws_uri = 'ws://127.0.0.1:5000';
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        this.sio = sio(this.ws_uri);


        this.sio.on('connect', function () {
            console.log("on open...");
            //console.log(e);
            this.sio.on('message', this._onMessage.bind(this));
            this.sio.on('disconnect', this._onClose.bind(this));

            eventDispatcher.dispatchEvent('connect');
        }.bind(this));
    }


    _onMessage(message) {
        console.log("on message...");
        console.log(message);
        //let jsonObj = JSON.parse(message);
        //console.log(jsonObj);
        let cmd = message['cmd'];
        let data = message['data'];

        eventDispatcher.dispatchEvent(cmd, data);
    }


    _onClose(e) {
        console.log("on close...");
        console.log(e);
        eventDispatcher.dispatchEvent('disconnect', e);
    }

    sendPacket(packet) {
        console.log("sendPacket->");
        console.log(packet);
        //this.socket.emit(packet.cmd, packet.packet);
        this.sio.send(packet.as_json());
    }

}

