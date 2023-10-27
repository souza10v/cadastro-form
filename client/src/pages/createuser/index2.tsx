import { Link } from "react-router-dom";
import './styles.css';

export const CreateUser = () => {
    return (
        <div className="singup-container">
            <div className="singup-box">
                <h1>Inscreva-se</h1>
                <form>
                    <div className="singup-form">
                        <label>Nome</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Nome de usuário"
                            required
                        />
                        <label>Sobrenome</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Nome de usuário"
                            required
                        />
                    </div>
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                    />
                    <button type="submit">Inscrever</button>
                </form>
                
                <div id="create-account-link">
                    <Link to="/createuser">Create Account</Link>
                </div>
            </div>
        </div>
    );
}
