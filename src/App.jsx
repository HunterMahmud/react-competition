import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const nameList = ['Abul', 'Babul', 'Kabul', 'Dabul', 'Ebul'];
  const calc = useCallback((nameList) => {
    console.log('render');
    return nameList[Math.floor(Math.random() * 4)];
  },[])

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>{calc(nameList)}</p>

    </>
  )
}

export default App
