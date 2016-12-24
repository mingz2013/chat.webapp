/**
 * Created by zhaojm on 17/12/2016.
 */


import {ws_uri} from '../constants/config'
import SocketClient from './SocketClient'

import LoginPacket from './packets/LoginPacket'
import SignInPacket from './packets/SignInPacket'
import RegisterPacket from './packets/RegisterPacket'

import eventDispatcher from './EventDispatcher'

class ChatClient {
    constructor() {
        console.log("chat client contructor");
        this.socketClient = null;
    }

    connect() {
        this.socketClient = new SocketClient(ws_uri);
        eventDispatcher.addListener('open', this._onConnected.bind(this));
        eventDispatcher.addListener('close', this._onDisconnected.bind(this));
    }

    _onConnected(e) {
        console.log("on connected");
        console.log(e);
    }

    _onDisconnected(e) {
        console.log("on disconnected");
        console.log(e);
    }

    signIn(auth) {
        let packet = new SignInPacket(auth);
        this.socketClient.sendPacket(packet);
    };

    register(auth, username, password) {
        let packet = new RegisterPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    login(auth, username, password) {
        let packet = new LoginPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };


    closeConnect() {
        this.socketClient.closeConnect();
        //this.sockClient = null;
    }

    logout() {

    }

    sendMessage(sendto, message) {

    }

}

export default new ChatClient();

