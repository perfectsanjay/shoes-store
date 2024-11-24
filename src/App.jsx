import { useState } from 'react'
import HomePage from './components/pages/homepage/homepage.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>

    </>
  )
}

export default App
