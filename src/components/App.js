import {BrowserRouter, Routes, Route} from "react-router-dom";

import styled from "styled-components";
import HomePage from "./HomePage";
import SessionPage from "./SessionPage";

export default function App() {
  const uri = "https://mock-api.driven.com.br/api/v7/cineflex/";
  return (
    <BrowserRouter>
      <Header>
        <h1>Cineflex</h1>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage uri={uri} />} />
        <Route path="/sessoes/:idMovie" element={<SessionPage uri={uri} />} />
      </Routes>
    </BrowserRouter>
  );
}

const Header = styled.header`
  width: 100vw;
  height: 67px;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c3cfd9;

  h1 {
    color: #e8833a;
    font-size: 34px;
    line-height: 40px;
    text-transform: uppercase;
  }
`;
