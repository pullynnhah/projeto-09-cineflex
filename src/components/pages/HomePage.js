import {useEffect, useState} from "react";

import axios from "axios";
import Page from "../commons/Page";
import Title from "../commons/Title";

import Load from "../commons/Load";
import Movies from "../Movies";

export default function HomePage({uri}) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${uri}/movies`);
    promise.then(response => setMovies(response.data));
  }, [uri]);

  if (movies === null) {
    return <Load />;
  }

  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o filme</h2>
      </Title>
      <Movies movies={movies} />
    </Page>
  );
}
