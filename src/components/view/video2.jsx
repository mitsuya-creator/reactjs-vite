import React, { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
    const myref = useRef(null);
    useEffect(() => {
        if (isPlaying) myref.current.play();
        else myref.current.pause();
    })
    return <video ref={myref} src={src} loop playsInline />
}

export default function VideoApp() {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayBtn = () => {
        setIsPlaying(!isPlaying)
    }
    return (
        <>
            <button type="button" onClick={handlePlayBtn}>{isPlaying ? "Pause" : "Play"}</button>
            <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying} />

        </>
    )
}