function createEncryption({ serverUrl, roomId }) {
    if (typeof serverUrl !== "string") throw Error(`Expected serverUrl to be a string, received: ${serverUrl}`);
    if (typeof roomId !== "string"  throw Error(`Expected roomId to be a string ${roomId}`));

    let intervalId;
    let callBackMessage;
    return {
        connect() {
            console.log(`Conncting to ${roomId}, {Encrypted}`);
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

        }
    }
}