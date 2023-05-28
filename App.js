import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

function NumberBtn ({ id, className, number }){
  return (
    <button id={id} className={`btn ${className}`}
     value={number}>
      {number}</button>
  );
}

NumberBtn.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

function OperatorBtn ({ id, className, symbol }) {
  return (
    <button id={id} className={`btn ${className}`}>{symbol}</button>
  );
}

OperatorBtn.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired
};

function Panel ({ handleClick }) {
  return (
    <>
    <div id="calculator-btns" >
        <OperatorBtn id="ac" className="jumbo" symbol="AC" />
        <OperatorBtn id="divide" symbol="/" />
        <OperatorBtn id="multiply" symbol="x" />
        <NumberBtn id="seven" number={7} />
        <NumberBtn id="eight" number={8} />
        <NumberBtn id="nine" number={9} />
        <OperatorBtn id="minus" symbol="-" />
        <NumberBtn id="four" number={4} />
        <NumberBtn id="five" number={5} />
        <NumberBtn id="six" number={6} />
        <OperatorBtn id="plus" symbol="+" />
        <div style={{backgroundColor: "inherit", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 0, marginRight: 20}}> 
          <div style={{backgroundColor: "inherit", display: "flex"}}>
            <NumberBtn id="one" number={1} />
            <NumberBtn id="two" number={2} />
            <NumberBtn id="three" number={3} />
          </div>
          <div style={{backgroundColor: "blue", gridColumn: "1 / span 3", display: "flex"}}>
            <NumberBtn id="zero" className="jumbo" number={0} />
            <NumberBtn id="decimal-point" number={"."} />
          </div>
          <div style={{backgroundColor: "inherit", gridColumn: 4, gridRow: "1 / span 2"}}>
            <OperatorBtn id="equals" symbol="=" />
          </div>
        </div>
    </div>
    </>
  );
}

function Calculator ({ output, equation }) {
  return (
    <>
    <div className="calculator">
      <div id="equation-screen">EQUATION</div>
      <div id="output-screen">{output}</div>
      <Panel />
    </div>
    </>
  );
}

function App() {
  const [input, setInput] = useState('HI');
  const [equation, setEquation] = useState([Array(3).fill(null)]);

  function handleClick (){}

  return (
    <>
      <Calculator output={input} equation={equation} />
    </>
  );
}

export default App;
