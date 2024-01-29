import MyComponent from "./MyComponent";
const TemplateExpression = () => {
    const name = "Gustavo";
    return (
        
        <div>
            <h3>Seja bem vindo {name}</h3>
            <p>a soma é {2+3}</p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpression