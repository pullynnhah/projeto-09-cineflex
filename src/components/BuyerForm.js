import {useState} from "react";
import {useNavigate} from "react-router-dom";

import styled from "styled-components";
import Button from "./commons/Button";
import axios from "axios";

function BuyerInput({idSeat, idNames, buyers, names, setNames, cpfs, setCPFs}) {
  buyers[idSeat] = {
    idAssento: idSeat,
    number: idNames[idSeat],
    nome: names[idSeat] ?? "",
    cpf: cpfs[idSeat] ?? "",
  };
  return (
    <Input>
      <h3>Assento {idNames[idSeat]}</h3>
      <label>Nome do comprador:</label>
      <input
        type="text"
        value={names[idSeat] ?? ""}
        onChange={e => setNames({...names, [idSeat]: e.target.value})}
        onBlur={() => (buyers[idSeat].nome = names[idSeat])}
        placeholder="Digite seu nome..."
        required
      />
      <label>CPF do comprador:</label>
      <input
        type="text"
        value={cpfs[idSeat] ?? ""}
        onChange={e => setCPFs({...cpfs, [idSeat]: e.target.value})}
        onBlur={() => (buyers[idSeat].cpf = cpfs[idSeat])}
        placeholder="Digite seu CPF..."
        required
      />
    </Input>
  );
}

export default function BuyerForm({uri, idSeats, buyers, idNames}) {
  const navigate = useNavigate();
  const [names, setNames] = useState({});
  const [cpfs, setCPFs] = useState({});

  function postAPI(e) {
    e.preventDefault();
    const data = {
      ids: [...idSeats],
      compradores: Object.values(buyers),
    };

    axios.post(`${uri}/seats/book-many`, data);
    navigate("/sucesso");
  }

  return (
    <Form onSubmit={postAPI}>
      {[...idSeats]
        .sort((a, b) => a - b)
        .map((idSeat, index) => (
          <BuyerInput
            idSeat={idSeat}
            idNames={idNames}
            key={index}
            buyers={buyers}
            names={names}
            setNames={setNames}
            cpfs={cpfs}
            setCPFs={setCPFs}
          />
        ))}
      <div>{idSeats.size !== 0 ? <Button>Reservar assento(s)</Button> : ""}</div>
    </Form>
  );
}

const Form = styled.form`
  width: calc(100vw - 48px);
  margin: 42px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 57px;
  }
`;
const Input = styled.section`
  width: 100%;
  color: #293845;
  font-size: 18px;
  line-height: 21px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    color: #e8833a;
    font-weight: 700;
    margin-bottom: 10px;
  }

  input {
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 18px;
    cursor: pointer;
  }

  input::placeholder {
    color: #afafaf;
    font-style: italic;
  }
`;
