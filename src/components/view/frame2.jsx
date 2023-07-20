import React, { useRef, useState } from "react";
import { flushSync } from "react-dom";
import NextButton from "../button/nextBtn";

export default function ListIMg() {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const handleNextBtn = () => {
        flushSync(() => {
            if (index < catlist.length - 1) setIndex(index + 1);
            else setIndex(0);
        })
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    return (
        <>
            <NextButton handler={handleNextBtn} />
            <div style={{ display: 'flex', justifyContent: 'justify-content-center', width: '50%', overflow: 'hidden' }}>
                {catlist.map((cat, i) => <img ref={index === i ? ref : null} src={cat.imageUrl} width={200} alt={cat.id} key={cat.id} style={{ margin: 10 }} />)}
            </div>
        </>
    )
}



const catlist = [];
let i;
for (i = 0; i < 10; i++) {
    catlist.push({
        id: i,
        imageUrl: 'https://placekitten.com/250/200?image=' + i

    })
}