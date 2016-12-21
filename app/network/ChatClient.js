/**
 * Created by zhaojm on 17/12/2016.
 */


import {ws_uri} from '../constants/config'
import SocketClient from './SocketClient'

import LoginPacket from './packets/LoginPacket'
import SignInPacket from './packets/SignInPacket'
import RegisterPacket from './packets/RegisterPacket'

export default class ChatClient {
    constructor() {
        this.socketClient = null;
    }

    connect() {
        this.socketClient = new SocketClient(ws_uri);
        //this.socketClient.on("receiveMessage", this.onReceiveMessage.bind(this));
        //this.socketClient.on("login", this.onLogin.bind(this));
        //this.socketClient.on("logout", this.onLogout.bind(this));
        this.socketClient.on("my_response", this.onResponse.bind(this));

    }

    signIn(auth) {
        let packet = new SignInPacket(auth);
        this.socketClient.sendPacket(packet);
    };

    bindOnSignIn(fn) {
        this.socketClient.on('signin', fn);
    };

    register(auth, username, password) {
        let packet = new RegisterPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    bindOnRegister(fn) {
        this.socketClient.on('register', fn);
    };

    login(auth, username, password) {
        let packet = new LoginPacket(auth, username, password);
        this.socketClient.sendPacket(packet);
    };

    bindOnLogin(fn) {
        this.socketClient.on('login', fn);
    };



    onResponse(data) {
        console.log(data);
    }

    //
    //onheartbeat(data){
    //    console.log(data);
    //}


    //onReceiveMessage(message) {
    //    console.log(message);
    //}
    //
    //onLogin() {
    //
    //}
    //
    //onLogout() {
    //
    //}


    closeConnect() {
        this.socketClient.closeConnect();
        //this.sockClient = null;
    }


    logout() {

    }

    sendMessage(sendto, message) {

    }





}

