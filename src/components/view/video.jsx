import { useState, useRef } from "react";
import ButtonControl from "../button/btnPlayPause";
export default function VideoFrame() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef(null);
    const handleClick = () => {
        let nextPlaying = !isPlaying;
        setIsPlaying(nextPlaying);
        if (nextPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }
    return (
        <>
            <ButtonControl isPlaying={isPlaying} handle={handleClick} />
            <video width={500} ref={ref} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>
        </>
    )
}