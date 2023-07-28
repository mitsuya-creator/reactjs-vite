import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/apiPlanet';

export default function App() {
  const [planetList, setPlanetList] = useState([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(response => {
      if (!ignore) {
        console.log('fetched a list of planets');
        setPlanetList(response);
        setPlanetId(response[0].id)
      }
    })
    return () => ignore = true;
  }, []);

  useEffect(() => {
    if (planetId === '') return;
    let ignore = false;
    fetchData(`/planets/${planetId}/places`).then(response => {
      if (!ignore) {
        console.log(`fetched a list places of ${planetId}`);
        setPlaceList(response);
        setPlaceId(response[0].id)
      }
    })
    return () => ignore = true;
  }, [planetId]);

  return (
    <>
      <label>
        pick a planet:
        <select value={planetId} onChange={e => setPlanetId(e.target.value)}>
          {planetList.map(planet => <option key={planet.id} value={planet.id}>{planet.name}</option>)}
        </select>
      </label>
      <br />
      <label>
        pick a place:
        <select value={placeId} onChange={e => setPlaceId(e.target.value)}>
          {placeList.map(place => <option value={place.id} key={place.id}>{place.name}</option>)}
        </select>
      </label>
      <hr />
      <h1>you are going to: {placeId.charAt(0).toUpperCase() + placeId.slice(1) || '???'} on {planetId.charAt(0).toUpperCase() + planetId.slice(1) || '???'}</h1>
    </>
  )
}