/**
 * Created by zhaojm on 17/12/2016.
 */


import {ws_uri} from '../constants/config'
import SocketClient from './SocketClient'

import LoginPacket from './packets/LoginPacket'

export default class ChatClient {
    constructor() {
        this.socketClient = new SocketClient(ws_uri);
        this.socketClient.on("receiveMessage", this.onReceiveMessage.bind(this));
        this.socketClient.on("login", this.onLogin.bind(this));
        this.socketClient.on("logout", this.onLogout.bind(this));
    }

    onReceiveMessage(message) {

    }

    onLogin() {

    }

    onLogout() {

    }



    closeConnect() {
        this.socketClient.closeConnect();
        //this.sockClient = null;
    }

    login(username, password) {
        let packet = new LoginPacket(username, password);
        this.socketClient.sendPacket(packet);
    }

    logout() {

    }

    sendMessage(sendto, message) {

    }





}

