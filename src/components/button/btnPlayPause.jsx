export default function ButtonControl({ isPlaying, handle }) {
    return <button type="button" onClick={handle}>{isPlaying ? "Pause" : "Play"}</button>
}