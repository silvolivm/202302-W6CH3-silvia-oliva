import React from "react";
import { Actions } from "../Actions/actions";
import { Info } from "../Info/info";
import { Keyboard } from "../Keyboard/keyboard";

function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}

export default App;
