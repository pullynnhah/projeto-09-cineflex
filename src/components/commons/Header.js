import {useNavigate} from "react-router-dom";

import styled from "styled-components";
import leftArrow from "../../assets/images/left.jpg";

export default function Header({}) {
  const navigate = useNavigate();
  return (
    <Heading>
      <img src={leftArrow} alt="setinha" onClick={() => navigate(-1)} />
      <h1>Cineflex</h1>
    </Heading>
  );
}

const Heading = styled.header`
  height: 67px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #c3cfd9;

  img {
    width: 40px;
    padding-left: 10px;
  }

  img:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  h1 {
    color: #e8833a;
    font-size: 34px;
    line-height: 40px;
    text-transform: uppercase;
    margin: 0 auto;
  }
`;
