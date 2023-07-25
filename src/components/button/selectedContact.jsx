export default function selectedContact({ contact, setSelected, selected }) {

    return (
        <>
            <button type="button" onClick={() => setSelected(contact.id)}>{selected === contact.id ? <b>{contact.name}</b> : contact.name}</button>
        </>
    )
}