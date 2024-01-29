import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imgNight from './assets/night.jpg'
import './App.css'
import DataComponent from './components/Data';
import ListRenderComponent from './components/ListRender'
import ConditionalRenderComponent from './components/ConditionalRender'
import ShowUserNameComponent from './components/ShowUserName'
import CardDetailsComponent from './components/CardDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{ paddingBottom: "500px" }}>
        <h1>Avançando em React</h1>
        {/* 1 - Imagem no Public */}
        <img src="/img.jpg" alt="Imagem Publica" />
        {/* 2 - Imagem no Assets */}
        <img src={imgNight} alt="Outra imagem" />
        <h3>Aula de useState</h3>
        <DataComponent />
        <ListRenderComponent />
        <ConditionalRenderComponent />
        <ShowUserNameComponent name="Gustavo" />
        <CardDetailsComponent brand="Citroen" km={10000} color="Preto"/>
      </div>

    </>
  )
}

export default App
