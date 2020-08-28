import React from 'react';
import './Calculate.css';

function Calculate() {

  let arg1 = 0;
  let arg2 = 0;
  let opr;

  function setNum(num) {
    document.getElementById("input").value += num;
  }

  function resetValue() {
    document.getElementById("input").value='';
  }

  function setOprt(operator) {
    opr = operator;
    setArg();
    resetValue();
  }

  function setArg(){
    arg1 = document.getElementById("input").value;
    arg1 = parseInt(arg1, 10);
  }

  function performCalculation() {
    arg2 = document.getElementById("input").value;
    arg2 = parseInt(arg2, 10);
    switch(opr) {
      case '+':
        document.getElementById("input").value = arg1+arg2;
        break;
      
      case '-':
        document.getElementById("input").value = arg1-arg2;
        break;

      case '*':
        document.getElementById("input").value = arg1*arg2;
        break;

      case '/':
        document.getElementById("input").value = arg1/arg2;
        break;

      default:
        document.getElementById("input").value = arg1;
    }
  }

  return (
    <div className="Calculate">
      <input type="number" id="input" /><br />
      <div className="Keys">
          <button id="one" value={1} onClick={e => setNum(e.target.value)}>1</button>
          <button id="two" value={2} onClick={e => setNum(e.target.value)}>2</button>
          <button id="thr" value={3} onClick={e => setNum(e.target.value)}>3</button>
          <button id="clr" onClick={resetValue}>C</button>
          <br/>
          <button id="for" value={4} onClick={e => setNum(e.target.value)}>4</button>
          <button id="fiv" value={5} onClick={e => setNum(e.target.value)}>5</button>
          <button id="six" value={6} onClick={e => setNum(e.target.value)}>6</button>
          <button id="pls" value="+" onClick={e => setOprt(e.target.value)}>+</button>
          <br/>
          <button id="sev" value={7} onClick={e => setNum(e.target.value)}>7</button>
          <button id="eig" value={8} onClick={e => setNum(e.target.value)}>8</button>
          <button id="nin" value={9} onClick={e => setNum(e.target.value)}>9</button>
          <button id="sub" value="-" onClick={e => setOprt(e.target.value)}>-</button>
          <br/>
          <button id="zer" value={0} onClick={e => setNum(e.target.value)}>0</button>
          <button id="eql" onClick={performCalculation}>=</button>
          <button id="mul" value="*" onClick={e => setOprt(e.target.value)}>*</button>
          <button id="div" value="/" onClick={e => setOprt(e.target.value)}>/</button>
        </div>
    </div>
  );
}

export default Calculate;
