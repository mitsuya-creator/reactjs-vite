let id = 1;
export default function AddButton({ task, setTask, text, setText }) {
    return <button type="button" onClick={() => {
        setTask([...task, { id: id++, text: text, completed: false }])
        setText("");
    }} > Add</button >
}