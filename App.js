import { useState } from 'react';
import Calculator from "./components/Calculator";
import DisplayScreen from "./components/DisplayScreen";
import ButtonPanel from "./components/ButtonPanel";
import Button from "./components/Button";
import './App.css';

function App () {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.num.length < 16) {
      setCalc({
        ...calc, 
        num:
          calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
          res: !calc.sign ? 0: calc.res
      });
    }
  };

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
    <Calculator>
      <DisplayScreen output={calc.num ? calc.num : calc.res} equation={calc.res} />
      <ButtonPanel
        buttons={
          buttonValues.flat().map((button, i) => {
            return (
              <Button key={i} className={
                button === "=" ? "equals" : 
                button === "AC" || button === 0 ? "jumbo" : ""} value={button} 
                onClick = {
                  button === "AC" 
                  ? resetClickHandler
                  : button === "." 
                  ? decimalClickHandler
                  : button ===  "/" || button === "x" || button === "-" || button === "+"
                  ? signClickHandler
                  : numClickHandler
                } 
              />
            );
          })
        }>
      </ButtonPanel>
    </Calculator>
  );
}

export default App;
