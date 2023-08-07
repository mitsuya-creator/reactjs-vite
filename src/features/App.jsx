import React from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function App() {
  const firstName = useFormInput("Mitsuya");
  const lastName = useFormInput("Takashi");

  return (
    <>
      <label>
        First name : {""} <input {...firstName} />
      </label>
      <br />
      <label>
        Last name: {""} <input {...lastName} />
      </label>
      <hr />
      <h1>Hello {firstName.value} {lastName.value}</h1>
    </>
  )
}