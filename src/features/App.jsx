import React, { useState } from "react";
import { dataSample } from "../api/data";
import SelectedContact from "../components/button/selectedContact";
import DetailsContact from "../components/view/detailsContact";
import "../css/App.css";

export default function App() {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(dataSample)
  return (
    <>
      {data.map(contact => <SelectedContact key={contact.id} contact={contact} selected={selected} setSelected={setSelected} />)}
      <hr />
      {data.map(contact => contact.id === selected ? <DetailsContact contact={contact} key={contact.id} data={data} setData={setData} /> : null)}
    </>
  )
}