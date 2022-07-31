import {useState} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";

import Header from "./commons/Header";
import HomePage from "./pages/HomePage";
import SessionPage from "./pages/SessionPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  const uri = "https://mock-api.driven.com.br/api/v7/cineflex/";
  const movieData = {};

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage uri={uri} />} />
        <Route path="/sessoes/:idMovie" element={<SessionPage uri={uri} />} />
        <Route
          path="/assentos/:idSession"
          element={<SeatsPage uri={uri} const movieData={movieData} />}
        />
        <Route path="/sucesso" element={<SuccessPage movieData={movieData} />} />
      </Routes>
    </BrowserRouter>
  );
}
