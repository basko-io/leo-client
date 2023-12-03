import { useState } from 'react'
import reactLogo from './assets/react.svg'
import baskoioLogo from './assets/img/basko-io.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/basko-io" target="_blank">
          <img src={baskoioLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/basko-io/leo-client" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Basko.io + Leo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
