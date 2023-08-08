import React from "react";
import { usePointerPosition } from "../hooks/usePointerPosition";
import { useDelayedValue } from "../hooks/useDelayedValue";
import Dot from "../components/view/dot";

export default function App() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 300);
  const pos5 = useDelayedValue(pos4, 50);

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={.4} />
      <Dot position={pos5} opacity={.2} />
    </>
  )
}