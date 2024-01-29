import { useState } from "react"

const Data = () => {
    let dado = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);
    return (
        <div>
            <p>Valor: {dado}</p>
            <button onClick={() => dado = 15}>Mudar Variavel</button>
            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(anotherNumber - 2)}>Mudar numero</button>
            </div>
        </div>
    );
};

export default Data