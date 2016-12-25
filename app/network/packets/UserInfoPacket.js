/**
 * Created by zhaojm on 25/12/2016.
 */
import BasePacket from './BasePacket'

export default class UserInfoPacket extends BasePacket {

    constructor(auth, username) {
        let cmd = "user_info";
        let data = {"username": username};
        super(cmd, data, auth);
    }
}