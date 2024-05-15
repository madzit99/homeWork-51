import { useState } from 'react'
import './App.css'
import Ball from './components/Ball';

function App() {
  const [balls, setBalls] = useState<number[]>([5,11,16,23,32]);
  
  

  return (
    <div>
      <button type='button' >Новые цифры</button>
      <div>
        {balls.map((ball:number) => (
          <Ball value={ball}/>
        ))}
      </div>
    </div>
  )
}

export default App
