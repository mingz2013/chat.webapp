/**
 * Created by zhaojm on 17/12/2016.
 */


import {ws_uri} from '../constants/config'
import SocketClient from './SocketClient'

import LoginPacket from './packets/LoginPacket'
import RegisterPacket from './packets/RegisterPacket'
import UserListPacket from './packets/UserListPacket'
import UserInfoPacket from './packets/UserInfoPacket'
import FriendsAddPacket from './packets/FriendsAddPacket'

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
        if (data.retcode == 0) {
            let messages = data.result;
            messages.forEach(function (message) {
                eventDispatcher.dispatchEvent(message.type, message);
            });

        } else {
            console.log("heartbeat error")
        }
    }

    register(auth, username, password) {
        let packet = new RegisterPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    login(auth, username, password) {
        let packet = new LoginPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    user_list(auth) {
        let packet = new UserListPacket(auth);
        this.socketClient.sendPacket(packet);
    }

    user_info(auth, username) {
        let packet = new UserInfoPacket(auth, username);
        this.socketClient.sendPacket(packet);
    }

    friends_add(auth, username) {
        let packet = new UserInfoPacket(auth, username);
        this.socketClient.sendPacket(packet);
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

