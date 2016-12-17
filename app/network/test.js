///**
// * Created by zhaojm on 07/10/2016.
// */
//
//var sock = null;
//var ellog = null;
//window.onload = function () {
//    ellog = document.getElementById('log');
//    var wsuri;
//    if (window.location.protocol === "file:") {
//        wsuri = "ws://127.0.0.1:8080/ws_game";
//    } else {
//        wsuri = "ws://" + window.location.hostname + ":8080/ws_game";
//    }
//    if ("WebSocket" in window) {
//        sock = new WebSocket(wsuri);
//    } else if ("MozWebSocket" in window) {
//        sock = new MozWebSocket(wsuri);
//    } else {
//        log("Browser does not support WebSocket!");
//    }
//    if (sock) {
//        sock.onopen = function () {
//            log("Connected to " + wsuri);
//        }
//        sock.onclose = function (e) {
//            log("Connection closed (wasClean = " + e.wasClean + ", code = " + e.code + ", reason = '" + e.reason + "')");
//            sock = null;
//        }
//        sock.onmessage = function (e) {
//            log("Got echo: " + e.data);
//        }
//    }
//};
//function send() {
//    var msg = document.getElementById('message').value;
//    if (sock) {
//        sock.send(msg);
//        log("Sent: " + msg);
//    } else {
//        log("Not connected.");
//    }
//};
//function log(m) {
//    ellog.innerHTML += m + '\n';
//    ellog.scrollTop = ellog.scrollHeight;
//};