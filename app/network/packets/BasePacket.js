/**
 * Created by zhaojm on 17/12/2016.
 */

import Packet from './Packet'

export default class BasePacket extends Packet {

    constructor(cmd, data) {
        this.cmd = cmd;
        this.data = data;
        let packet = {
            "cmd": this.cmd,
            "data": this.data
        };
        super(packet);
    }
}

