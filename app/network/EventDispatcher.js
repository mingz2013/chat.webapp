/**
 * Created by zhaojm on 24/12/2016.
 */
class EventDispatcher {

    constructor() {
        this._events = {};
    }

    removeListener(event, handler) {
        let handlers = this._events[event] || [];
        var index = handlers.indexOf(handler);
        if (index > -1) {
            this.splice(index, 1);
        }
        this._events[event] = handlers;
    }

    addListener(event, handler) {
        let handlers = this._events[event] || [];
        handlers.push(handler);
        this._events[event] = handlers;
    }

    dispatchEvent(event, params) {
        let handlers = this._events[event] || [];
        handlers.forEach(function (handler) {
            handler(params);
        })

    }
}

export default new EventDispatcher();