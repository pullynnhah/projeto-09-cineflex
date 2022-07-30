import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import axios from "axios";
import Page from "../commons/Page";
import Title from "../commons/Title";

import Load from "../commons/Load";
import Sessions from "../Sessions";
import Banner from "../commons/Banner";

export default function SessionPage({uri, setIsHome}) {
  const [sessions, setSessions] = useState(null);
  const {idMovie} = useParams();

  setIsHome(false);
  useEffect(() => {
    const promise = axios.get(`${uri}/movies/${idMovie}/showtimes`);
    promise.then(response => setSessions(response.data));
  }, [uri, idMovie]);

  if (sessions === null) {
    return <Load />;
  }

  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o horário</h2>
      </Title>
      <Sessions sessions={sessions.days} />
      <Banner>
        <div className="image-container">
          <img src={sessions.posterURL} alt="movie poster" />
        </div>
        <p>{sessions.title}</p>
      </Banner>
    </Page>
  );
}
