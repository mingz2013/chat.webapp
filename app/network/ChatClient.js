/**
 * Created by zhaojm on 17/12/2016.
 */


import {ws_uri} from '../constants/config'
import SocketClient from './SocketClient'

import LoginPacket from './packets/LoginPacket'
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

        eventDispatcher.addListener('heartbeat', this._onHeartbeat.bind(this));
    }

    _onConnected(e) {
        console.log("on connected");
        console.log(e);
    }

    _onDisconnected(e) {
        console.log("on disconnected");
        console.log(e);
    }

    _onHeartbeat(data) {
        console.log("on heartbeat");
        console.log(data);
    }

    register(auth, username, password) {
        let packet = new RegisterPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    login(auth, username, password) {
        let packet = new LoginPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    get_all_users(auth) {

    }


    //closeConnect() {
    //    this.socketClient.closeConnect();
    //    //this.sockClient = null;
    //}
    //
    //logout() {
    //
    //}
    //
    //sendMessage(sendto, message) {
    //
    //}

}

export default new ChatClient();

