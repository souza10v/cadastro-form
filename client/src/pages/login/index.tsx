import { FormEvent } from "react"
import './styles.css'
import { Link } from "react-router-dom";

export const Login = () => {

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        console.log("working")
    }

    return (
        <body>
            <div className="login-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <form className="login-id" onSubmit={handleLogin}>
                        <input
                        className="login-input"
                            type="text"
                            placeholder="Nome de usuario"
                            required
                        />
                        <input
                        className="login-input"
                            type="password"
                            placeholder="Senha"
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                    <div id="create-account-link">
                        <Link to="/createuser">Create Account</Link>
                    </div>
                </div>
            </div>
        </body>
    )
}
