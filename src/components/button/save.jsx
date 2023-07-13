export default function SaveBtn({ setIsEdit, task }) {
    return (
        <>
            <input type="text" value={task.name} />
            <button type="button" onClick={() => setIsEdit(false)}>Save</button>
        </>
    )
}