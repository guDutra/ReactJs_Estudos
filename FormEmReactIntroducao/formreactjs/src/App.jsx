import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from '../components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
          <h1>Form em React</h1>
          <MyForm userName="Gustavo" userEmail="gustavo@email.com"/>
      </div>

    </>
  )
}

export default App
