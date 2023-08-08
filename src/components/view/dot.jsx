import React from "react";
export default function Dot({ position, opacity }) {
    return (
        <div style={{
            position: "absolute",
            backgroundColor: "pink",
            borderRadius: "50%",
            opacity,
            transform: `translate(${position.x}px,${position.y}px)`,
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40
        }}>
        </div>
    )
}