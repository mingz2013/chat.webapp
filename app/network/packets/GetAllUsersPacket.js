/**
 * Created by zhaojm on 25/12/2016.
 */
import BasePacket from './BasePacket'

export default class GetAllUsersPacket extends BasePacket {

    constructor(auth) {
        let cmd = "get_all_users";
        let data = {};
        super(cmd, data, auth);
    }
}