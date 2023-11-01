import { FormEvent, useState } from "react"
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../api/userApi"
import { useCookies } from "react-cookie";

export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorCatched, setErrorCatched] = useState<string>("");

    const navigate = useNavigate();
    const [authToken, setCookie] = useCookies(["token"]);
    const [userName, setUserName] = useCookies(["userName"]);
    const [firstName, setFirstName] = useCookies(["firstName"]);
    
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
 
        if (username === '' || password === '' ) {
            setErrorCatched("Preencha todos os campos");
            return; 
        }

        let data = {
            username,
            password
        }

        const response = await userLogin(data)
        
        //console.log("login index", response.token)

        const expirationTime = new Date().getTime() +  (60 * 60 * 1000);

        setCookie("token", response.token, { path: '/', expires: new Date(expirationTime)});
        setUserName("userName", response.user.username, { path: '/', expires: new Date(expirationTime)});
        setFirstName("firstName", response.user.first_name, { path: '/', expires: new Date(expirationTime)});

        // if (!response.error) {
        //     navigate("/dashboard");
        // } else {
        //     setErrorCatched(response.error.toString());
        //     console.log("not login")
        // }

        if (authToken) {
            navigate("/dashboard");
        } else {
            setErrorCatched(response.error.toString());
            console.log("not login")
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
                        <Link to="/createuser">Create Account {`->`} </Link>
                    </div>
                </div>
            </div>
    )
}