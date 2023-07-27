function encrypConnection(roomId) {
    return {
        connect() {
            console.log(`Connected to ${roomId} ...(encrypted)`);
        },
        disconnect() {
            console.log(`Disconnected from ${roomId} ...(encrypted)`);
        }
    }
}

function unEncrypConnection(roomId) {
    return {
        connect() {
            console.log(`Connected to ${roomId} ...(unencrypted)`);
        },
        disconnect() {
            console.log(`Disconnected from ${roomId} ...(unencrypted)`);
        }
    }
}

export { encrypConnection, unEncrypConnection };