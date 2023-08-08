import { useEffect, experimental_useEffectEvent as useEffectEvent } from "react";
export function useInterval(callback, delay) {
    const onTick = useEffectEvent(callback)
    useEffect(() => {
        const interval = setInterval(onTick, delay);
        return () => clearInterval(interval);
    }, [delay])
}