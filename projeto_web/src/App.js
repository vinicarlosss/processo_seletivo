import React from "react";
import Sidebar from "./Components/Sidebar.js";
import { Main, MainRow, Tittle } from './Components/styles';
import Controller from "./Components/Controller.js";
import Historical from "./Components/Historical.js";

function App() {
  return (
    <>
      
      <Main>
        <Sidebar></Sidebar>
        <Controller></Controller>        
      </Main>
      <Main>
          <Tittle>Painel de Controle</Tittle>
          <Historical></Historical>
      </Main>
      
    </>
  );
}

export default App;
