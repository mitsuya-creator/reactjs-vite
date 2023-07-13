import SaveBtn from "./save";

export default function EditBtn({ task, setIsEdit, isEdit }) {
    return (
        <>

            {isEdit ? <SaveBtn setIsEdit={setIsEdit} task={task} /> : <button type="button" onClick={() => setIsEdit(true)}>Edit</button>}
        </>
    )
}