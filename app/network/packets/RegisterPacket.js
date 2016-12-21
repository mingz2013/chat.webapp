/**
 * Created by zhaojm on 17/12/2016.
 */
import BasePacket from './BasePacket'

export default class RegisterPacket extends BasePacket {

    constructor(auth, username, password) {
        let cmd = "register";
        let data = {
            "username": username,
            "password": password
        };
        super(cmd, data, auth);
    }
}

