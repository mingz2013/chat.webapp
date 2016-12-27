/**
 * Created by zhaojm on 27/12/2016.
 */

import sio from 'socket.io-client'
import eventDispatcher from './EventDispatcher'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        console.log(this.ws_uri);
        this.sio = sio(this.ws_uri);


        this.sio.on('connect', (() => {
            console.log("on connect...");
            //console.log(e);
            this.sio.on('message', this._onMessage.bind(this));
            this.sio.on('disconnect', this._onDisconnect.bind(this));

            eventDispatcher.dispatchEvent('connect');
        }).bind(this));
    }


    _onMessage(message) {
        console.log("on message...");
        console.log(message);
        let cmd = message['cmd'];
        let data = message['data'];

        eventDispatcher.dispatchEvent(cmd, data);
    }


    _onDisconnect(e) {
        console.log("on close...");
        console.log(e);
        eventDispatcher.dispatchEvent('disconnect', e);
    }

    sendPacket(packet) {
        console.log("sendPacket->");
        console.log(packet);
        this.sio.send(packet.packet);
    }

}

