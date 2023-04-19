import React from "react";
import Die from "./components/Die";
import "./App.css";

export default function App() {
  const [dice, setDice] = React.useState(rollDice());

  function rollDice() {
    let diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.floor(Math.random() * 7));
    }
    return diceArray;
  }

  const diceElements = dice.map((dice) => <Die value={dice} />);

  function newRoll() {
    setDice(rollDice)
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="dice--roll" onClick={newRoll} >Roll</button>
    </main>
  );
}
