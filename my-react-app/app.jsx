import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>おれはイーロンマスク</h1>
      <button onClick={()=>{console.log('hello')}}>Click me</button>
    </div>
  );
}

// Log to console
console.log('Hello console')