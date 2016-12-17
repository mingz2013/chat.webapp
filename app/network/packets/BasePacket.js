/**
 * Created by zhaojm on 17/12/2016.
 */

import Packet from './Packet'

export default class BasePacket extends Packet {

    constructor(cmd, data) {

        let packet = {
            "cmd": cmd,
            "data": data
        };
        super(packet);
        this.cmd = cmd;
        this.data = data;
    }
}

