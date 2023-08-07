import { useEffect, useState } from "react";

export function useCounter(initalNumber) {
    const [counter, setCounter] = useState(initalNumber)
    useEffect(() => {
        const intervalId = setInterval(() => setCounter(c => c + 1), 1000);
        return () => clearInterval(intervalId);
    }, [counter]);
    return counter;
}