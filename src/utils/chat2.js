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
            else if (event !== 'connected') throw Error('only connected event is supported');
            else connectedCallback = callback;
        },
        disconnect() {
            clearTimeout(timeout);
        }

    }
}