import React from 'react';
import { useState } from 'react';

const App = () => {
const [calc,setCalc] = useState("");
const [result, setResult] = useState("");
  const ops = ['/','*','+','-','.']
  const updatecalc = value => {
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      ) 
    )

    setCalc(calc+value);
    if ( !ops.includes(value) ){
      setResult(eval(calc + value).toString());
    }
  } 



  const createDigits = () => {
    const digits = [];


    for(let i = 1; i <10; i++){
      digits.push(
        <button 
        onClick = {() => updatecalc(i.toString())}
      key="{i}">{i}</button>)

    }
    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).ToString());
  }

const calculator =() =>{
  setCalc(eval(calc)).toString();
}
const deleteLast = () => {
  if (calc == '') {
    return;
  }

const value = calc.slice(0,-1);
setCalc (value);


  }
  

  return (
    <div className="App">
      <div className="calculator">
        <div className="dislay">
          {result ? <span>({result})</span> :'' }{'  '}
          {calc || "0"}
        </div>
        <div className="operators">
          <button  onClick={() => updatecalc('/')}>/</button>
          <button onClick={() => updatecalc('*')}>*</button>
          <button onClick={() => updatecalc('+')}>+</button>
          <button onClick={() => updatecalc('-')}>-</button>
          <button onClick= {deleteLast}>DEL</button>



        </div>
        <div className="digits">
          { createDigits() }
        <button  onClick = {() => updatecalc('0')}>0</button>
        <button  onClick = {() => updatecalc('.')}>.</button>
        <button  onClick = {updatecalc}>=</button>
        </div>
      </div>
    </div>
  );

  }
export default App;
