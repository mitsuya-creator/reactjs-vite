import React, { useEffect } from "react";
import { createConnection } from "../../utils/connection"
export default function ViewConnection() {
    useEffect(() => {
        const network = createConnection();
        network.connect();
        return () => network.disconnect();
    }, [])
    return <h1>Welcome</h1>
}