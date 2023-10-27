import { Link } from "react-router-dom";
import './styles.css'

export const CreateUser = () => {
    return (
        <body>
            <div className="singup-container">
                <div className="singup-title">Registration</div>
                <form action="#">
                    <div className="user-details">
                        <div className="user-input-box">
                            <span className="user-input-details">Nome</span>
                            <input className="user-input-input" type="text" placeholder="Insira o nome" required />
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Sobrenome</span>
                            <input className="user-input-input" type="text" placeholder="Insira o sobrenome" required />
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Senha</span>
                            <input className="user-input-input" type="password" placeholder="Insira a senha" required />
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Usuário</span>
                            <input className="user-input-input" type="text" placeholder="Insira seu usuário" required />
                        </div>
                        <div className="user-input-box">
                            <span className="user-input-details">Email</span>
                            <input className="user-input-input" type="email" placeholder="Insira o email" required />
                        </div>
                    </div>

                    <div className="user-input-gender-details">
                        <input className="user-input-radio-gender" type="radio" name="gender" id="dot-1" />
                        <input className="user-input-radio-gender" type="radio" name="gender" id="dot-2" />
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
                        <button className="user-input-button" type="submit">Inscrever</button>
                    </div>
                </form>
            </div>
        </body>
    );
}
