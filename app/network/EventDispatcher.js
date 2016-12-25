/**
 * Created by zhaojm on 24/12/2016.
 */
class EventDispatcher {

    constructor() {
        console.log("eventdispatcher constructor");
        this._events = {};
    }

    removeListener(event, handler) {
        console.log("removeListener: " + event);
        let handlers = this._events[event] || [];
        var index = handlers.indexOf(handler);
        if (index > -1) {
            this.splice(index, 1);
        }
        this._events[event] = handlers;
    }

    addListener(event, handler) {
        console.log("addListener: " + event);
        let handlers = this._events[event] || [];
        handlers.push(handler);
        this._events[event] = handlers;

    }

    dispatchEvent(event, params) {
        console.log("dispatchEvent: " + event);
        let handlers = this._events[event] || [];
        console.log(handlers.length);
        handlers.forEach(function (handler) {
            handler(params);
        })

    }
}

export default new EventDispatcher();