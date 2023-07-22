export default function ShowButton({ handleShow, isShow }) {
    return <button type="button" onClick={handleShow} >{isShow ? "Close" : "Show"}</button>
}