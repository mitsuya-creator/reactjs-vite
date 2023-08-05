import React, { useState, useEffect, useRef } from "react";
import { experimental_useEffectEvent as useEffectEvent } from "react";
import { FadeInAnimation } from "../utils/animation";

function Welcome({ duration }) {
  const ref = useRef(null);

  const onAppear = useEffectEvent(animation => animation.start(duration));

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    onAppear(animation);
    return () => {
      animation.stop();
    };
  }, []);
  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'black',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'salmon'
      }}
    >
      Welcome
    </h1>
  );
}

export default function App() {
  const [duration, setDuration] = useState(100);
  const [show, setShow] = useState(false);

  console.log(performance.now())
  return (
    <>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={e => setDuration(Number(e.target.value))}
        />
        <br />
        Fade in duration: {duration} ms
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome duration={duration} />}
    </>
  );
}
