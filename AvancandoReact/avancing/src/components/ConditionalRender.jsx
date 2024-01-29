

const ConditionalRender = () => {
    const x = true;
    const name = "João"
    return (
        <div>
            <h3>Isso será exibido</h3>
            {x && <p>Se x for true</p>}
            {name == "João" ? (
                <div>
                    <p>Olá João</p>
                </div>
            ) : (
                <div>
                    <p>Olá {name}</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender