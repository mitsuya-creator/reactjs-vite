export default function InputField({ text, setText, send }) {
    return (
        <>
            <textarea type="text" value={text} placeholder="Type here" onChange={e => setText(e.target.value)} />
            <br />
            <button type="button" onClick={send} disabled={text === ""}>send</button>
        </>
    )
}