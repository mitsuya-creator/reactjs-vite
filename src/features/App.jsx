import React, { useState } from "react";
import { dataSample } from "../api/data";
import SelectedContact from "../components/button/selectedContact";
import DetailsContact from "../components/view/detailsContact";
import "../css/App.css";

export default function App() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      {dataSample.map(contact => <SelectedContact key={contact.id} contact={contact} selected={selected} setSelected={setSelected} />
      )}
      <hr />
      {dataSample.map(contact => contact.id === selected ? <DetailsContact contact={contact} key={contact.id} /> : null)}
    </>
  )
}