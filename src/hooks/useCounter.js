import { useEffect, useState } from "react";

export function useCounter(initalNumber, delay) {
    const [counter, setCounter] = useState(initalNumber)
    useEffect(() => {
        const intervalId = setInterval(() => setCounter(c => c + 1), delay);
        return () => clearInterval(intervalId);
    }, [delay]);
    return counter;
}