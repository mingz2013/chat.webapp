/**
 * Created by zhaojm on 17/12/2016.
 */
import BasePacket from './BasePacket'

export default class MessagePacket extends BasePacket {

    constructor(sendto, message) {
        let cmd = "message";
        let data = {
            "sendto": sendto,
            "message": message
        };
        super(cmd, data);
    }
}