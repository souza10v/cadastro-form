import { useState } from "react";

export const NewForm = () => {

    const [userGender, setGender] = useState("");

    const handleSubmit = () => {
        console.log("working")
    }

    return (

        <div className="singup-container">
            <div className="singup-title">Análise Preliminar de Evento</div>
            <form action="#">
                <div className="user-details">
                    <div className="user-input-box">
                        <span className="user-input-details">Tarefa</span>
                        <input className="user-input-input" type="text"
                            placeholder="Insira a natureza da tarefa" />
                    </div>
                    <div className="user-input-box">
                        <span className="user-input-details">Área</span>
                        <input className="user-input-input" type="text"
                            placeholder="Insira a área do problema" />
                    </div>


                    <div>
                        <div className="user-input-gender-details">
                            <input className="user-input-radio-gender" type="radio"
                                name="gender" id="dot-1" value="Sim"
                                checked={userGender === "Sim"}
                                onChange={(e) => setGender(e.target.value)} />
                            <input className="user-input-radio-gender" type="radio"
                                name="gender" id="dot-2" value="Não"
                                checked={userGender === "Não"}
                                onChange={(e) => setGender(e.target.value)} />
                            <span className="user-input-gender-title">Sinto-me bem para realizar essa tarefa</span>

                            <div className="user-input-category">
                                <label htmlFor="dot-1" className="user-input-dot-one-label">
                                    <span className="user-input-dot-one"></span>
                                    <span className="user-input-dot-gender">Sim</span>
                                </label>
                                <label htmlFor="dot-2" className="user-input-dot-one-label">
                                    <span className="user-input-dot-one"></span>
                                    <span className="user-input-dot-gender">Não</span>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="user-input-gender-details">
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-1" value="Sim"
                            checked={userGender === "Sim"}
                            onChange={(e) => setGender(e.target.value)} />
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-2" value="Não"
                            checked={userGender === "Não"}
                            onChange={(e) => setGender(e.target.value)} />
                        <span className="user-input-gender-title">Sou habilitado para fazer a tarefa?</span>

                        <div className="user-input-category">
                            <label htmlFor="dot-1" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Sim</span>
                            </label>
                            <label htmlFor="dot-2" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Não</span>
                            </label>
                        </div>
                    </div>

                    <div className="user-input-gender-details">
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-1" value="Sim"
                            checked={userGender === "Sim"}
                            onChange={(e) => setGender(e.target.value)} />
                        <input className="user-input-radio-gender" type="radio"
                            name="gender" id="dot-2" value="Não"
                            checked={userGender === "Não"}
                            onChange={(e) => setGender(e.target.value)} />
                        <span className="user-input-gender-title">As pessoas sabem onde estou?</span>

                        <div className="user-input-category">
                            <label htmlFor="dot-1" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Sim</span>
                            </label>
                            <label htmlFor="dot-2" className="user-input-dot-one-label">
                                <span className="user-input-dot-one"></span>
                                <span className="user-input-dot-gender">Não</span>
                            </label>
                        </div>
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
