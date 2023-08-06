function createEncryption({ serverUrl, roomId }) {
    if (typeof serverUrl !== "string") throw Error(`Expected serverUrl to be a string, received: ${serverUrl}`);
    if (typeof roomId !== "string") throw Error(`Expected roomId to be a string ${roomId}`);

    let intervalId;
    let callBackMessage;
    return {
        connect() {
            console.log(`Connecting to ${roomId}, {Encrypted}`);
            clearInterval(intervalId);
            intervalId = setInterval(() => {
                if (callBackMessage) {
                    if (Math.random() > 0.5) {
                        callBackMessage("hey")
                    } else {
                        callBackMessage("lol")
                    }
                }
            }, 3000)
        },
        on(event, callback) {
            if (callBackMessage) {
                throw Error("cannot add the handler twice")
            }
            if (event !== "message") {
                throw Errorf("only 'message' event is supported")
            }
            callBackMessage = callback;
        },
        disconnect() {
            clearInterval(intervalId);
            callBackMessage = null;
            console.log(`disconnect from ${roomId} room (Encrypted)`);
        }
    }
}


function createUnEncryption({ serverUrl, roomId }) {
    if (typeof serverUrl !== "string") throw Error(`Expected serverUrl to be a string, received: ${serverUrl}`);
    if (typeof roomId !== "string") throw Error(`Expected roomId to be a string ${roomId}`);

    let intervalId;
    let callBackMessage;
    return {
        connect() {
            console.log(`Connecting to ${roomId}, {UnEncrypted}`);
            intervalId = setInterval(() => {
                if (callBackMessage) {
                    if (Math.random() > 0.5) {
                        callBackMessage("hey")
                    } else {
                        callBackMessage("lol")
                    }
                }
            }, 3000)
        },
        on(event, callback) {
            if (callBackMessage) {
                throw Error("cannot add the handler twice")
            }
            if (event !== "message") {
                throw Errorf("only 'message' event is supported")
            }
            callBackMessage = callback;
        },
        disconnect() {
            clearInterval(intervalId);
            callBackMessage = null;
            console.log(`disconnect from ${roomId} room (UnEncrypted)`);
        }
    }
}

export { createEncryption, createUnEncryption };