/**
 * Created by zhaojm on 07/10/2016.
 */

import eio from 'engine.io-client'
import reconnect from 'engine.io-reconnect'
import eventDispatcher from './EventDispatcher'

export default class SocketClient {

    constructor(ws_uri) {
        this.ws_uri = ws_uri;
        //this.ws_uri = 'ws://127.0.0.1:5000';
        //this.ws_uri = "ws://127.0.0.1:8080/ws_chat";
        console.log(this.ws_uri);
        this.eio = eio(this.ws_uri);
        let io = reconnect(this.eio);
        io.on('reconnect', function (attempts) {
            console.log('Reconnected after %d attempts', attempts);
        });

        io.on('reconnecting', function (attempts) {
            console.log('Trying to reconnect after %d attempts', attempts);
        });

        io.on('reconnect_error', function (error) {
            console.log('Error trying to reconnect', error);
        });

        io.on('reconnect_timeout', function (timeout) {
            console.log('Timeout after %dms', timeout);
        });

        this.eio.on('open', function () {
            console.log("on open...");
            //console.log(e);
            this.eio.on('message', this._onMessage.bind(this));
            this.eio.on('close', this._onClose.bind(this));

            //this.socket.send(JSON.stringify({
            //    "cmd": "login",
            //    "data": "hello"
            //}));
            eventDispatcher.dispatchEvent('open');
        }.bind(this));

    }


    _onMessage(message) {
        console.log("on message...");
        console.log(message);
        let jsonObj = JSON.parse(message);
        console.log(jsonObj);
        let cmd = jsonObj['cmd'];
        let data = jsonObj['data'];

        eventDispatcher.dispatchEvent(cmd, data);
    }


    _onClose(e) {
        console.log("on close...");
        console.log(e);
        eventDispatcher.dispatchEvent('close', e);
    }

    sendPacket(packet) {
        console.log("sendPacket->");
        console.log(packet);
        //this.socket.emit(packet.cmd, packet.packet);
        this.eio.send(packet.as_json());
    }

}

