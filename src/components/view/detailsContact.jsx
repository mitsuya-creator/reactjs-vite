import React, { useState } from "react";
import SaveReset from "../button/saveReset";

export default function DetailsContact({ contact, data, setData }) {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const onReset = () => {
        setName(() => contact.name);
        setEmail(() => contact.email);
    }
    const onSave = (selected) => {
        const updateData = data.map(d => {
            if (d.id === selected.id) {
                return { id: selected.id, name: name, email: email }
            } else {
                return d
            }
        })
        setData(updateData)
    }
    return (
        <>
            <label>
                Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <br />
                Email: <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <SaveReset onSave={() => onSave(contact)} onReset={onReset} />
        </>
    )
}