import { useRef } from "react";
import MitusyaImg from "../../assets/Mitsuya.jpeg";
import CifuyuImg from "../../assets/cifuyu.jpg";
import HinaImg from "../../assets/hina.jpg";
export default function Frame() {
    const mitsuyaBtn = useRef(null);
    const cifuyuBtn = useRef(null);
    const hinBtn = useRef(null);

    const handleScrolltoMitsuya = () => {
        mitsuyaBtn.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    const handleScrolltoCifuyu = () => {
        cifuyuBtn.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    const handleScrolltoHina = () => {
        hinBtn.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <nav>
                <button onClick={handleScrolltoMitsuya}>Mitsuya</button>
                <button onClick={handleScrolltoCifuyu}>Cifuyu</button>
                <button onClick={handleScrolltoHina}>Hina</button>
            </nav>
            <div style={{ width: 500, height: 300, overflow: 'hidden' }}>
                <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <li ><img src={MitusyaImg} alt="mitsuya" ref={mitsuyaBtn} width={200} style={{ margin: 10 }} /></li>
                    <li ><img src={CifuyuImg} alt="cifuyu" ref={cifuyuBtn} width={350} height={200} style={{ margin: 10 }} /></li>
                    <li ><img src={HinaImg} alt="hina" ref={hinBtn} width={200} style={{ margin: 10 }} /></li>
                </ul>
            </div>
        </>
    )
}