import { useState } from 'react'
import Table from './Component/Table'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Table/>
      </div>
    </>
  )
}

export default App
