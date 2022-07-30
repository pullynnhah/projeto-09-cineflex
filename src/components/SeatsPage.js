import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Title from "./commons/Title";
import Page from "./commons/Page";
import Seats from "./Seats";
import Load from "./commons/Load";
import BuyerForm from "./BuyerForm";

export default function SeatsPage({uri}) {
  const [seatsData, setSeatsData] = useState(null);
  const [idSeats, setIdSeats] = useState(new Set());

  const {idSession} = useParams();
  const buyers = {};

  function createObject(arr) {
    return Object.assign(...arr.map(val => ({[val.id]: val.name})));
  }
  useEffect(() => {
    const promise = axios.get(`${uri}/showtimes/${idSession}/seats`);
    promise.then(response => setSeatsData(response.data));
  }, [uri, idSession]);

  if (seatsData === null) {
    return <Load />;
  }
  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o(s) assento(s)</h2>
      </Title>
      <Seats
        seats={seatsData.seats}
        orderSeats={idSeats}
        setOrderSeats={setIdSeats}
        buyers={buyers}
      />
      <BuyerForm
        uri={uri}
        idSeats={idSeats}
        buyers={buyers}
        idNames={createObject(seatsData.seats)}
      />
    </Page>
  );
}
