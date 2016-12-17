/**
 * Created by zhaojm on 17/12/2016.
 */
import BasePacket from './BasePacket'

class LoginPacket extends BasePacket {

    constructor(username, password) {
        let cmd = "login";
        let data = {
            "username": username,
            "password": password
        };
        super(cmd, data);
    }
}

export default LoginPacket;