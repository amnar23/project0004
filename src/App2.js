import React from 'react'
import Hello from './Hello'

function App2({name,smile})
{
    
    return <div><p>Component1</p>Hello World from {name}!! {smile}
    <br></br>
    <Hello firstName={name}></Hello></div>  //passing name to Hello.js
    
}

export default App2;