export default function SaveBtn({ task, setIsEdit }) {
    return (
        <>
            <input type="text" value={task.name} />
            <button type="button" onClick={() => setIsEdit(false)}>Save</button>
        </>
    )
}