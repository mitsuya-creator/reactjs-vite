import { useRef } from "react";
import MitusyaImg from "../../assets/Mitsuya.jpeg";
import CifuyuImg from "../../assets/cifuyu.jpg";
import HinaImg from "../../assets/hina.jpg";
export default function Frame() {
    const itemsRef = useRef(null);

    const scrollToId = itemId => {
        const map = getMap();
        const node = map.get(itemId);
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    function getMap() {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }
    return (
        <>
            <nav>
                <button type="button" onClick={() => scrollToId(0)} >Mitsuya</button>
                <button type="button" onClick={() => scrollToId(4)} >Cifuyu</button>
                <button type="button" onClick={() => scrollToId(8)} >Hina</button>
            </nav>
            <div style={{ width: 660, overflow: 'hidden' }}>
                <ul style={{ justifyContent: 'justify-content-center', display: 'flex' }}>
                    {listImg.map(img => <li key={img.id} ref={node => {
                        const map = getMap();
                        console.log(node)
                        if (node) {
                            map.set(img.id, node)
                        } else {
                            map.delete(img.id)
                        }
                    }}><img src={img.imgUrl} alt={img.imgUrl} width={200} style={{ margin: 10 }} /></li>)}
                </ul>
            </div>
        </>
    )
}

const listImg = [];
let i, url;
for (i = 0; i < 9; i++) {
    if (i < 3) {
        url = MitusyaImg
    } else if (i > 2 && i < 6) {
        url = CifuyuImg
    } else {
        url = HinaImg
    }
    listImg.push({
        id: i,
        imgUrl: url
    })
}
console.log(listImg);