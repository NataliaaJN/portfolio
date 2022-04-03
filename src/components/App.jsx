import "../styles/App.scss";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Contact from "./contact/Contact";
import Main from "./main/Main";
import IMac from "./IMac";
import Cv from "./cv/cv";

const App = ()=> {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <IMac /> */}
              <Header />
              <Main />
            </>
          }
        />

        <Route path="/cv" element={<Cv/>} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
