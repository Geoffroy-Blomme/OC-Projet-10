import { Routes, Route } from "react-router-dom";
import React from "react";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import FicheLogement from "../pages/Fiche_logement";
import APropos from "../pages/A_propos";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Fiche-Logement" element={<FicheLogement />}></Route>
      <Route path="A-propos" element={<APropos />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
