import { useState } from "react";

export const NewForm = () =>{

    const [userGender, setGender] = useState("");

    const handleSubmit = () => {
        console.log("working")
    }

    return(
  
        <div className="singup-container">
            <div className="singup-title">Análise Preliminar de Evento</div>
            <form action="#">
                <div className="user-details">
                    <div className="user-input-box">
                    Executante
                        <span className="user-input-details">Executante</span>
                        <input className="user-input-input" type="text"
                            placeholder="Insira o nome"/>
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Sobrenome</span>
                        <input className="user-input-input" type="text"
                            placeholder="Insira o sobrenome"/>
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Senha</span>
                        <input className="user-input-input" type="password"
                            placeholder="Insira a senha" required />
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Confirmar Senha</span>
                        <input
                            className="user-input-input" type="password"
                            placeholder="Confirme a senha" required
                        />
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Usuário</span>
                        <input className="user-input-input" type="text"
                            placeholder="Insira seu usuário" />
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Email</span>
                        <input className="user-input-input" type="email"
                            placeholder="Insira o email" />
                    </div>
                </div>

                <div className="user-input-gender-details">
                    <input className="user-input-radio-gender" type="radio"
                        name="gender" id="dot-1" value="Masculino"
                        checked={userGender === "Masculino"}
                        onChange={(e) => setGender(e.target.value)} />
                    <input className="user-input-radio-gender" type="radio"
                        name="gender" id="dot-2" value="Feminino"
                        checked={userGender === "Feminino"}
                        onChange={(e) => setGender(e.target.value)} />
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
                <span className="user-input-details"></span>
                    <button className="user-input-button" type="submit" onClick={handleSubmit}>Inscrever</button>
                    <span className="user-input-details">

                    </span>
                </div>
            </form>
        </div>

    )
}
