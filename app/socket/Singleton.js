/**
 * Created by zhaojm on 16/12/2016.
 */

import Socket from './Socket'
import ws_uri from '../constants/config'

const Singleton = (function () {
    let instance;

    function createInstance() {
        //const io = require('socket.io-client')
        //const socket = io.connect();
        //return socket;
        const socket = new Socket(ws_uri);
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;