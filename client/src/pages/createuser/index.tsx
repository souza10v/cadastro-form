import { Link } from "react-router-dom";
import './styles.css'
import { FormEvent, useState } from "react";

export const CreateUser = () => {

    const [ firstName, setFirstName ] = useState("")
    const [ userName, setUserName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ userPassword, setPassword ] = useState("")
    const [ userEmail, setUserEmail ] = useState("")
    const [ userGender, setGender ] = useState("")

    console.log(firstName, userName, lastName, userPassword, userEmail, userGender)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log("handle submit")
    }

    return (
            <div className="singup-container">
                <div className="singup-title">Registration</div>
                <form action="#">
                    <div className="user-details">
                        <div className="user-input-box">
                            <span className="user-input-details">Nome</span>
                            <input className="user-input-input" type="text" 
                            placeholder="Insira o nome" value={firstName} required 
                            onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Sobrenome</span>
                            <input className="user-input-input" type="text" 
                            placeholder="Insira o sobrenome" value={lastName} required 
                            onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Senha</span>
                            <input className="user-input-input" value={userPassword} type="password" 
                            placeholder="Insira a senha" required 
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Usuário</span>
                            <input className="user-input-input" type="text" 
                            placeholder="Insira seu usuário" value={userName} 
                            onChange={(e) => setUserName(e.target.value)} required/>
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Email</span>
                            <input className="user-input-input" type="email" 
                            placeholder="Insira o email" required value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className="user-input-gender-details">
                        <input className="user-input-radio-gender" type="radio" 
                        name="gender" id="dot-1" value="Masculino" 
                        checked={userGender === "Masculino"} 
                        onChange={(e) => setGender(e.target.value)}/>
                        <input className="user-input-radio-gender" type="radio" 
                        name="gender" id="dot-2" value="Feminino"
                        checked={userGender === "Feminino"}
                        onChange={(e) => setGender(e.target.value)}/>
                        <span className="user-input-gender-title">Genero</span>
                        <div className="user-input-category">
                            <label htmlFor="dot-1" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Masculino</span>
                            </label>
                            <label htmlFor="dot-2" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Feminino</span>
                            </label>
                        </div>
                    </div>
                    <div className="user-input-div-button">
                        <button className="user-input-button" type="submit" onClick={handleSubmit}>Inscrever</button>
                    </div>
                </form>
            </div>
    );
}
