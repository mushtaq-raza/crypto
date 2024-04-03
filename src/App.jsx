import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./ui/Header";
import MainAppLayout from "./ui/MainAppLayout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainAppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
