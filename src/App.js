import React from 'react';
import logo from './logo.svg';
import './App.css';

const hello=()=>"Hello"  //arrow function

function App(props) {
  let data={name:"Amna",uni:"IIUI"};
  let {name,uni}=data;  //this is destructuring
  return <div className="App">
    <h1>Component2</h1>
      My age is {props.age}<br></br>
      {hello()} from {name}. I study in {uni}!!
    </div>
}

export default App;
