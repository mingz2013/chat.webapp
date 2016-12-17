/**
 * Created by zhaojm on 17/12/2016.
 */

import SocketClient from './SocketClient'

import {ws_uri} from '../constants/config'

import LoginPacket from './packets/LoginPacket'

export default class ChatClient {
    constructor() {
        this.socketClient = new SocketClient(ws_uri);
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

