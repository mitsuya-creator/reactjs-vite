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
            inline: 'end'
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
            behavior: 'auto',
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
            <div>
                <ul>
                    <li><img src={MitusyaImg} alt="mitsuya" ref={mitsuyaBtn} /></li>
                    <li><img src={CifuyuImg} alt="cifuyu" ref={cifuyuBtn} /></li>
                    <li><img src={HinaImg} alt="hina" ref={hinBtn} /></li>
                </ul>
            </div>
        </>
    )
}