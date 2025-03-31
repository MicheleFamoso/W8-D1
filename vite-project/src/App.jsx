import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <>
      {" "}
      <ImageComponent
        link="https://www.sonoinviaggio.com/wp-content/uploads/2022/12/tokyo-cosa-vedere-giappone.jpg"
        alt="Japan"
      />
      <ButtonComponent name="Prova" />
      <h1>Capiamo React! </h1>
      <ButtonComponent name="Ciao" />
      <ImageComponent
        link="https://as2.ftcdn.net/v2/jpg/04/40/67/41/1000_F_440674167_FRF6S4MySDBoqqjeIUVoJp8KKJP2CkOb.jpg"
        alt="Japan"
      />
    </>
  );
}

export default App;
