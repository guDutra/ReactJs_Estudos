const Container = ({children}) => {
  return (
    <div>
        <h1>Conteúdo do componente pai:</h1>
        {children}
        <button>Clique aqui</button>
    </div>
  )
}

export default Container