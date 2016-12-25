/**
 * Created by zhaojm on 25/12/2016.
 */
import BasePacket from './BasePacket'

export default class FriendsAddPacket extends BasePacket {

    constructor(auth, username) {
        let cmd = "friends_add";
        let data = {"username": username};
        super(cmd, data, auth);
    }
}