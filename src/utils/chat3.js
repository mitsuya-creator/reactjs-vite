export function createConnection({ serverUrl, roomId }) {
    if (typeof serverUrl !== "string") throw Error(`Expected serverUrl to be string, Received: ${serverUrl}`);
    if (typeof roomId !== "string") throw Error(`Expected serverUrl to be string, Received: ${roomId}`);
    return {
        connect() {
            console.log(`Connecting to room ${roomId} at ${serverUrl}`)
        },
        disconnect() {
            console.log(`Disconnected from room ${roomId} at ${serverUrl}`)
        }
    }
}