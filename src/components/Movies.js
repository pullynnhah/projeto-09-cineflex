import {Link} from "react-router-dom";
import styled from "styled-components";

function Movie({id, posterURL}) {
  return (
    <MovieCard>
      <Link to={`/sessoes/${id}`}>
        <img src={posterURL} alt="movie poster" />
      </Link>
    </MovieCard>
  );
}

export default function Movies({movies}) {
  return (
    <ContainerMovies>
      {movies.map((movie, index) => (
        <Movie {...movie} key={index} />
      ))}
    </ContainerMovies>
  );
}

const ContainerMovies = styled.section`
  margin: 10px 30px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 11px;
`;

const MovieCard = styled.div`
  width: 145px;
  height: 209px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }

  img:hover {
    transform: scale(0.95);
  }
`;
