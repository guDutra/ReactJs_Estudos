import React from 'react'

const EventsComponent = () => {
  return (
    <div>
        <h3>Componente de Events</h3>
        <button onClick={alertBtn}>Alerta</button>
    </div>
  )
}

function alertBtn() {
    alert('Botão clicado');
};

export default EventsComponent