/**
 * Created by zhaojm on 25/12/2016.
 */
import BasePacket from './BasePacket'

export default class UserListPacket extends BasePacket {

    constructor(auth) {
        let cmd = "user_list";
        let data = {};
        super(cmd, data, auth);
    }
}