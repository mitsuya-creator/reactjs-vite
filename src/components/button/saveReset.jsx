export default function SaveReset({ onSave, onReset }) {
    return (
        <>
            <button type="button" onClick={onSave}>Save</button>
            <button type="button" onClick={onReset}>Reset</button>
        </>
    )
}