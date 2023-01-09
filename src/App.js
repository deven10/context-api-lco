import  React, { useState } from 'react';
import './App.css';

const GrandChild = (props) => {
  return (
    <div>
      <h1>Grand Child: </h1>
      <Child brand={props.brand}/>
    </div>
  )
}

const Child = (props) => {
  return (
   <h2>Child : {props.brand}</h2>
  )
}

function App() {

  const [brandname] = useState("Deven");

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Child brand={brandname}/> */}
      <GrandChild brand={brandname}/>
    </div>
  );
}

export default App;
