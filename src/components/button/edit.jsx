import SaveBtn from "./save";


export default function EditBtn({ task }) {
    return (
        <>
            {isEdit ? <SaveBtn task={task} setIsEdit={setIsEdit} /> : <button type="button" onClick={() => setIsEdit(true)}>Edit</button>}
        </>
    )
}