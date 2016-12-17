/**
 * Created by zhaojm on 17/12/2016.
 */
export default class BasePacket {

    constructor(cmd, data) {
        this.cmd = cmd;
        this.data = data;
    }

    as_json() {
        let packet = {
            "cmd": this.cmd,
            "data": this.data
        };
        return JSON.stringify(packet);
    }

}

