import { useState } from 'react';
import Calculator from "./components/Calculator";
import DisplayScreen from "./components/DisplayScreen";
import ButtonPanel from "./components/ButtonPanel";
import Button from "./components/Button";
import CalcProvider from './context/CalcContext';
import './App.css';

function App () {
  
  const signClickHandler = (e) => {};

  const resetClickHandler = (e) => {};

  const decimalClickHandler = (e) => {};

  const buttonValues = [
    ["AC", "/", "x"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3],
    [0, ".", "="]
  ];

  return (
    <CalcProvider>
      <Calculator>
        <DisplayScreen />
        <ButtonPanel
          buttons={
            buttonValues.flat().map((button, i) => {
              return (
                <Button key={i} className={
                  button === "=" ? "equals" : 
                  button === "AC" || button === 0 ? "jumbo" : ""} value={button} 
                />
              );
            })
          }>
        </ButtonPanel>
      </Calculator>
    </CalcProvider>
  );
}

export default App;
