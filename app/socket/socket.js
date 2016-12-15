/**
 * Created by zhaojm on 07/10/2016.
 */
export default class Socket {
    //sock = null;
    constructor(ws_uri) {
        this.ws_uri = "ws://127.0.0.1:8080/ws_chat";

        if ("WebSocket" in window) {
            this.sock = new WebSocket(this.ws_uri);
        } else if ("MozWebSocket" in window) {
            this.sock = new MozWebSocket(this.ws_uri);
        } else {
            log("Browser does not support WebSocket!");
        }

        if (this.sock) {
            this.sock.onopen = this.onOpen;
            this.sock.onclose = this.onClose;
            this.sock.onmessage = this.onMessage;
            this.sock.onerror = this.onError;
        }
    }

    onOpen(e) {
        console.log("Connected to " + this.ws_uri);
    }

    onClose(e) {
        console.log("Connection closed (wasClean = " + e.wasClean + ", code = " + e.code + ", reason = '" + e.reason + "')");
        this.sock = null;
    }

    onMessage(e) {
        this.log("Got echo: " + e.data);
    }

    onError(e) {
        this.log("on error");
    }

    send(msg) {
        //var msg = document.getElementById('message').value;
        if (this.sock) {
            this.sock.send(msg);
            console.log("Sent: " + msg);
        } else {
            log("Not connected.");
        }
    }
}