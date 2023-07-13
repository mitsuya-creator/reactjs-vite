export default function DeleteBtn({ dispatch, taskId }) {
    return (
        <button type="button" onClick={() => dispatch({
            type: "deleted",
            id: taskId
        })} >Delete</button>
    )
}