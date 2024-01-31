import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from '../components/MyComponent'
import Title from '../components/Title'
function App() {
  const x = 10;
  const redTitle = true;
  return (
    <>
      <div className='App'>
        <h1>CSS no React</h1>
        <MyComponent />
        <p>Pegou o css doo component</p>
        <p style={{ color: "blue", padding: "25px" }}>Este elemento tem estilo inline</p>
        <h2 style={x > 10 ? { color: "yellow", marginBottom: "15px" } : { color: "pink", marginBottom: "15px" }}>
          CSS Dinamico
        </h2>
        <h2 className={redTitle ? "red-title" : "default-title"}>
          Classe dinamica
        </h2>
        <Title/>
      </div>

    </>
  )
}

export default App
