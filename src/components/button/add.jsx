let keyID = 0;
export default function AddButton({ dispatch, text, setText }) {
    return (
        <>
            <button
                type="button"
                onClick={() => {
                    dispatch({
                        type: "added",
                        id: keyID++,
                        name: text,
                        done: false
                    })
                    setText("")
                }
                }>Add Task</button >
        </>
    )
}