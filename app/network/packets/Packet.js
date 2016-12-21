/**
 * Created by zhaojm on 17/12/2016.
 */
export default class Packet {

    constructor(cmd, packet) {
        this.cmd = cmd;
        this.packet = packet;
    }

    //as_json() {
    //    return JSON.stringify(this.packet);
    //}

}