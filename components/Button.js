import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import "./Button.css";

function Button ({ className, value }) {
  const { calc, setCalc } = useContext(CalcContext);

  const decimalClickHandler = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".")
            ? calc.num + value : calc.num 
    });
  };

  const equalsClickHandler = () => {
    if(calc.res && calc.num && calc.sign) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          "-": (a, b) => a - b,
          "x": (a, b) => a * b,
          "/": (a, b) => a / b
        }
        return result[sign](a , b);
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0
      });
    } 
  };

  const operationClickHandler = () => {
      setCalc({
        ...calc,
        sign: value,
        res: !calc.res && calc.num 
             ? calc.num : calc.res,
        num: 0
      })
  };

  const numClickHandler = () => {
    const numberString = value.toString();

    let numberValue;

    if(numberString === "0" && calc.num === 0){
      numberValue = "0";
    } else if(/\.$/.test(calc.num.toString()) && numberString === "0") {
      numberValue = calc.num.toString() + "0"
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue
    });
  }

  const resetClickHandler = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0
    });
  };

  return (
    <button className={className} onClick={
      value === "AC" 
      ? resetClickHandler : 
      value === "="
      ? equalsClickHandler :
      value === "x" || value === "/" || value === "-" || value === "+"
      ? operationClickHandler :
      value === "."
      ? decimalClickHandler :
      numClickHandler
    }>
      {value}
    </button>
  );
};

export default Button;