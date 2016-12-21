/**
 * Created by zhaojm on 21/12/2016.
 */
import BasePacket from './BasePacket'

export default class SignInPacket extends BasePacket {

    constructor(auth) {
        let cmd = "signin";
        let data = {};
        super(cmd, data, auth);
    }
}