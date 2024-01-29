import { useState } from "react"
const ListRender = () => {
    const [list] = useState(["Gustavo", "Lucas", "Jaime", "Rafael"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Gustavo", age: 18 },
        { id: 2, name: "Lucas", age: 24 },
        { id: 3, name: "Jaime", age: 19 },
        { id: 4, name: "Rafael", age: 21 }
    ]);
    function deleteRandom() {
        const randomNumber = Math.floor(Math.random * 4);
        setUsers((prevUsers) =>
            prevUsers.filter((user) => randomNumber !== user.id));
    }
    return (
        <div>
            <ul>
                {/* Render sem key */}
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {/* Render sem key */}
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} </li>
                ))}
            </ul>
            {/* Previous State */}
            <button onClick={deleteRandom}>Deletar aleatório</button>
        </div>
    )
}


export default ListRender