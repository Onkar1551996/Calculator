import React, {useState} from 'react';
import './Calculate.css';

function Calculate() {

  const [arg1, setArg1] = useState(0);
  const [arg2, setArg2] = useState(0);
  const [opr, setOpr] = useState('');
  const [total, setTotal] = useState(0)

  function correctArg(val) {
    if(opr === '')
    {
      console.log(opr);
      setArg1(arg1 === 0 ? val : arg1+val);
    }
    else
      setArg2(arg2 === 0 ? val : arg2+val);
  }

  function resetValue() {
    setArg1(0);
    setArg2(0);
    setOpr('');
    setTotal(0);
  }

  function setOprt(operator) {
    setOpr(operator);
  }

  function performCalculation() {
    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);
    switch(opr) {
      case '+':
        setTotal(num1 + num2);
        break;
      
      case '-':
        setTotal(num1 - num2)
        break;

      case '*':
        setTotal(num1 * num2);
        break;

      case '/':
        setTotal(num1 / num2);
        break;

      default:
        setTotal(num1);
    }
  }

  return (
    <div className="Calculate">
      <input type="number" id="input1" value={arg1} readOnly /><br />
      <input type="number" id="input2" value={arg2} readOnly /><br />
      <input type="number" id="total" value={total} readOnly /><br />
      <div className="Keys">
          <button id="one" value={1} onClick={e => correctArg(e.target.value)}>1</button>
          <button id="two" value={2} onClick={e => correctArg(e.target.value)}>2</button>
          <button id="thr" value={3} onClick={e => correctArg(e.target.value)}>3</button>
          <button id="clr" onClick={resetValue}>C</button>
          <br/>
          <button id="for" value={4} onClick={e => correctArg(e.target.value)}>4</button>
          <button id="fiv" value={5} onClick={e => correctArg(e.target.value)}>5</button>
          <button id="six" value={6} onClick={e => correctArg(e.target.value)}>6</button>
          <button id="pls" value="+" onClick={e => setOprt(e.target.value)}>+</button>
          <br/>
          <button id="sev" value={7} onClick={e => correctArg(e.target.value)}>7</button>
          <button id="eig" value={8} onClick={e => correctArg(e.target.value)}>8</button>
          <button id="nin" value={9} onClick={e => correctArg(e.target.value)}>9</button>
          <button id="sub" value="-" onClick={e => setOprt(e.target.value)}>-</button>
          <br/>
          <button id="zer" value={0} onClick={e => correctArg(e.target.value)}>0</button>
          <button id="eql" onClick={performCalculation}>=</button>
          <button id="mul" value="*" onClick={e => setOprt(e.target.value)}>*</button>
          <button id="div" value="/" onClick={e => setOprt(e.target.value)}>/</button>
        </div>
    </div>
  );
}

export default Calculate;
