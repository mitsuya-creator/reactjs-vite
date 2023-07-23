import React, { useState, useEffect } from "react";
import { fetchBio } from "../../utils/apiDummy";

export default function SelectPerson() {
    const [person, setPerson] = useState("Mitsuya");
    const [bio, setBio] = useState(null);
    useEffect(() => {
        setBio(null);
        let ignore = false;
        fetchBio(person).then(response => !ignore && setBio(response));
        return () => ignore = true;
    }, [person])
    return (
        <>
            <select value={person} onChange={(e) => setPerson(e.target.value)}>
                <option value="Mitsuya">Mitsuya</option>
                <option value="Cifuyu">Cifuyu</option>
                <option value="Hina">Hina</option>
            </select>
            <hr />
            <p><i>{bio ?? "loading...."}</i></p>
        </>
    )
}