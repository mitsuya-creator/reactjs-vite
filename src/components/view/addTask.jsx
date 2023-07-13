import AddButton from "../button/add"

export default function FormAddTask({ text, setText, dispatch }) {
    return (
        <>
            <input
                type="text"
                value={text}
                placeholder="Add Task"
                onChange={e => setText(e.target.value)}
            />
            <AddButton dispatch={dispatch} text={text} setText={setText} />
        </>
    )
}