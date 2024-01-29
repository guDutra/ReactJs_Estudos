import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import TemplateExpressionComponent from './components/TemplateExpression'
import EventsComponent from './components/EventsComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplateExpressionComponent/>
        <EventsComponent/>
      </div>
      
    </>
  )
}

export default App
