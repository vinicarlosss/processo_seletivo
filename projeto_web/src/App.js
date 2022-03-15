import React from "react";
import Sidebar from "./Components/Sidebar.js";
import { Main } from './Components/styles';
import Controller from "./Components/Controller.js";



function App() {
  return (
    <>
      <Main>
        <Sidebar></Sidebar>
        <Controller></Controller>
      </Main>
      
    </>
  );
}

export default App;
