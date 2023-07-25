import React, { useState } from "react"
import SaveReset from "../button/saveReset"
export default function DetailsContact({ contact }) {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    return (
        <>
            <label>
                Name: <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <br />
                Email: <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <br />
            <SaveReset />
        </>
    )
}