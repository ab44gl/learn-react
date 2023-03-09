import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
function App() {
  const arr=[]
  for (let i = 0; i < 10; i++) {
    arr.push({id:i})
  }
  return (
    <div className="App">
     {arr.map((e)=><Message key={e.id} id={e.id} text="I'm good"></Message>)}
    </div>
  )
}

export default App
