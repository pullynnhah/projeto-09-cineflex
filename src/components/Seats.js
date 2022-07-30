import styled from "styled-components";
import {useState} from "react";

const availableSettings = {color: "#C3CFD9", borderColor: "#7B8B99", cursor: "pointer", type: 0};
const unavailableSettings = {color: "#FBE192", borderColor: "#F7C52B", cursor: "initial"};
const selectedSettings = {color: "#8DD7CF", borderColor: "#1AAE9E", cursor: "pointer", type: 1};

function Seat({name, id, isAvailable, buyers, orderSeats, setOrderSeats}) {
  const [settings, setSettings] = useState(isAvailable ? availableSettings : unavailableSettings);

  function canRemove() {
    if (buyers[id]?.nome || buyers[id]?.cpf) {
      return window.confirm(`Deseja deletar dados do assento ${name}?`);
    }
    return true;
  }

  function selectSeat() {
    if (isAvailable) {
      const newOrderSeats = new Set(orderSeats);
      if (settings.type === 0) {
        setSettings(selectedSettings);
        newOrderSeats.add(id);
        setOrderSeats(newOrderSeats);
      } else if (canRemove()) {
        delete buyers[id];
        newOrderSeats.delete(id);
        setSettings(availableSettings);
        setOrderSeats(newOrderSeats);
      }
    } else {
      alert("Esse assento não está disponível");
    }
  }

  return (
    <SeatCard {...settings} hover={isAvailable} onClick={selectSeat}>
      <p>{name.padStart(2, "0")}</p>
    </SeatCard>
  );
}

export default function Seats({seats, orderSeats, setOrderSeats, buyers}) {
  const settings = [
    {setting: selectedSettings, text: "Selecionado"},
    {setting: availableSettings, text: "Disponível"},
    {setting: unavailableSettings, text: "Indisponível"},
  ];
  return (
    <>
      <SeatsContainer>
        {seats.map((seat, index) => (
          <Seat
            {...seat}
            key={index}
            buyers={buyers}
            orderSeats={orderSeats}
            setOrderSeats={setOrderSeats}
          />
        ))}
      </SeatsContainer>
      <ChoicesContainer>
        {settings.map((setting, index) => (
          <div key={index}>
            <SeatCard {...setting.setting} />
            <p>{setting.text}</p>
          </div>
        ))}
      </ChoicesContainer>
    </>
  );
}

const SeatsContainer = styled.section`
  margin: 0 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 18px 8px;
`;

const ChoicesContainer = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const SeatCard = styled.div`
  width: 26px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  border-radius: 46%;

  p {
    font-size: 11px;
    line-height: 13px;
  }

  :hover {
    cursor: ${props => (props.hover ? props.cursor : "initial")};
    transform: scale(${props => (props.hover ? 0.95 : 1)});
  }
`;
