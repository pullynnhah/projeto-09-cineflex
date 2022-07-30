import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Title from "../commons/Title";
import Page from "../commons/Page";
import Seats from "../Seats";
import Load from "../commons/Load";
import BuyerForm from "../BuyerForm";
import Banner from "../commons/Banner";

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
      <Banner>
        <div className="image-container">
          <img src={seatsData.movie.posterURL} alt="movie poster" />
        </div>
        <div>
          <p>{seatsData.movie.title}</p>
          <p>{`${seatsData.day.weekday} - ${seatsData.name}`}</p>
        </div>
      </Banner>
    </Page>
  );
}
