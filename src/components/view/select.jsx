export default function SelectPerson({ setPerson, person, bio }) {
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