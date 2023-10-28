import { FormEvent, useState } from "react"
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../api/userApi"

export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errorCatched, setErrorCatched] = useState("")

    const navigate = useNavigate();
    
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        console.log("working")

        if (username === '' || password === '' ) {
            setErrorCatched("Preencha todos os campos");
            return; 
        }

        let data = {
            username,
            password
        }

        const response = await userLogin(data)
        
        console.log("front")
        console.log(response)

        if (response && response.error) {
            setErrorCatched(response.error);
        } else {
            navigate("/dashboard");
        }

    }

    return (
            <div className="login-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <form className="login-id">
                        <input
                            className="login-input"
                            type="text"
                            placeholder="Nome de usuario"
                            required
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                        <input
                            className="login-input"
                            type="password"
                            placeholder="Senha"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <button type="submit" onClick={handleLogin}>Login</button>
                        
                        <span className="errorCatched">{errorCatched}</span>
                        <p></p>
                    </form>
                    <div id="create-account-link">
                        <Link to="/createuser">Create Account  </Link>
                    </div>
                </div>
            </div>
    )
}
