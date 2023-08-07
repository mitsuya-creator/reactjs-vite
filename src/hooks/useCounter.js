import { useState } from "react";
import { useInterval } from "./useInterval";

export function useCounter(initalNumber, delay) {
    const [counter, setCounter] = useState(initalNumber)
    useInterval(() => setCounter(c => c + 1), delay)
    return counter;
}