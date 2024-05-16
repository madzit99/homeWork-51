import { useState } from 'react'
import Ball from './components/Ball';

const App = () => {
  const [balls, setBalls] = useState<number[]>([5,11,16,23,32]);

  const shuffle = (array:number[]) => {
    return array.sort(() => Math.random() - 0.5);
  }

  const newBalls = () => {
    let numbers:number[] = [];

    for (let i = 5; i <= 36; i++) {
      numbers.push(i);
    }

    const newNumbers = shuffle(numbers).slice(0,5).sort((a:number, b:number) => a - b);

    setBalls(newNumbers);
  }

  return (
    <div className='App'>
      <button className='my-button' type='button' onClick={newBalls} >Новые цифры</button>
      <div className='ball-wrapper'>
        {balls.map((ball:number) => (
          <Ball value={ball}/>
        ))}
      </div>
    </div>
  )
}

export default App
