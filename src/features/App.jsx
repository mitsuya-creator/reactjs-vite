import React, { useState, useEffect } from "react";
import { fetchBio } from "../utils/apiDummy";
import SelectPerson from "../components/view/select";

export default function App() {
  const [person, setPerson] = useState("Mitsuya");
  const [bio, setBio] = useState(null);
  console.log(person)
  useEffect(() => {
    setBio(null);
    let ignore = false;
    fetchBio(person).then(response => !ignore && setBio(response));
    return () => ignore = true;
  }, [person])
  return (
    <>
      <SelectPerson setPerson={setPerson} person={person} bio={bio} />
    </>
  )
}