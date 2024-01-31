import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ userName, userEmail }) => {
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name'
                        placeholder='Digite seu nome:'
                        onChange={handleName}
                        value={name || ""} />
                </div>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name='email'
                        placeholder='Digite seu e-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email || ""} />

                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário:'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}></textarea>
                </label>
                <label htmlFor="">
                    <span>Cargo</span>
                    <select name="role" 
                    onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Adminsitrador</option>

                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm