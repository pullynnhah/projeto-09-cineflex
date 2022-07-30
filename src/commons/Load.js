import styled from "styled-components";

import spinner from "../../assets/images/spinner.gif";

export default function Load() {
  return (
    <Spinner>
      <img src={spinner} alt="loading spinner" />
      <p>Carregando</p>
    </Spinner>
  );
}

const Spinner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 150px;
  }

  p {
    color: #e8833a;
    font-size: 24px;
    font-weight: 700;
  }
`;
