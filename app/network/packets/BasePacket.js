/**
 * Created by zhaojm on 17/12/2016.
 */

import Packet from './Packet'

export default class BasePacket extends Packet {

    constructor(cmd, data, auth) {

        let packet = {
            //"cmd": cmd,
            "data": data,
            "auth": auth
        };
        super(cmd, packet);
        //this.cmd = cmd;
        //this.data = data;
        //this.auth = auth;
    }
}

