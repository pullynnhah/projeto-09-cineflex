import Page from "../commons/Page";
import Title from "../commons/Title";
import styled from "styled-components";
import Button from "../commons/Button";
import {Link} from "react-router-dom";

export default function SuccessPage({movieData}) {
  function formatCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return (
    <Page>
      <Title color="#247A6B" weight={700}>
        <h2>
          Pedido feito
          <br />
          com sucesso!
        </h2>
      </Title>
      <Container>
        <div>
          <h4>Filme e sessão</h4>
          <p>{movieData.title}</p>
          <p>
            {movieData.date} {movieData.time}
          </p>
        </div>

        <div>
          <h4>Ingressos</h4>
          {Object.values(movieData.buyers).map((value, index) => (
            <p key={index}>Assento {value.number}</p>
          ))}
        </div>

        <div>
          <h4>Comprador(es)</h4>
          {Object.values(movieData.buyers).map(value => (
            <>
              <p>Nome: {value.nome}</p>
              <p>CPF: {formatCPF(value.cpf)}</p>
            </>
          ))}
        </div>

        <div className="btn">
          <Link to="/">
            <Button>Voltar pra Home</Button>
          </Link>
        </div>
      </Container>
    </Page>
  );
}

const Container = styled.section`
  padding: 60px 28px;
  color: #393845;

  display: flex;
  flex-direction: column;
  gap: 50px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  p {
    font-size: 22px;
    line-height: 26px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
