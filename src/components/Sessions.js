import {Link} from "react-router-dom";

import styled from "styled-components";
import Button from "./commons/Button";

function Session({weekday, date, showtimes}) {
  return (
    <SessionCard>
      <p>
        {weekday} - {date}
      </p>
      <div className="btns">
        {showtimes.map((showtime, index) => (
          <Link to={`/assentos/${showtime.id}`} key={index}>
            <SmallButton>{showtime.name}</SmallButton>
          </Link>
        ))}
      </div>
    </SessionCard>
  );
}

export default function Sessions({sessions}) {
  return (
    <section>
      {sessions.map((session, index) => (
        <Session key={index} {...session} />
      ))}
    </section>
  );
}

const SessionCard = styled.div`
  margin: 0 23px;

  p {
    color: #293845;
    font-size: 20px;
    line-height: 23px;
    margin: 23px 0;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const SmallButton = styled(Button)`
  width: 83px;
  height: 43px;
`;
