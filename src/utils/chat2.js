export function creatConnection(serverUrl, roomId) {
    let connectedCallback, timeout;
    return {
        connect() {
            timeout = setTimeout(() => {
                if (connectedCallback) connectedCallback();
            }, 100)
        },
        on(event, callback) {
            if (connectedCallback) throw Error('cannot add the handler twice!');
            if (event !== 'connected') throw Error('only connected event is supported');
            connectedCallback = callback;
        },
        disconnect() {
            clearTimeout(timeout);
        }

    }
}