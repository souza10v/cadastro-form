
type UserDataPros = {
    firstName: string;
    userName: string;
    lastName: string;
    userPassword: string;
    userEmail: string;
    userGender: string;
}

type loginData = {
    username: string;
    password: string;
}

const singupUser = async (userData: UserDataPros) => {

    //const response = await fetch(`http://localhost:8010/users/createuser`, {

    try {
        const response = await fetch(`http://localhost:8010/users/createuser`, { //ver .env
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        if (response.status === 200) {
            const responseData = await response.json(); // esperar json resposta
            console.log("Response to front end from server:", responseData);
            return responseData;
        }
    } catch (error) {
        console.log(error)
        const responseData = `Entrar em contato com suporte e informar erro: ${error}`;
        return responseData;
    }
}

const userLogin = async (loginData : loginData) => {

    try {
        const response = await fetch(`http://localhost:8010/users/login`, { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })

        if (response.status === 200) {
            const responseData = await response.json(); 
            console.log("login sucessful")
            console.log("Response to front end from server:", responseData);
            return responseData;
        }
        
    } catch (error) {
        console.log(error)
    }
}

export { singupUser, userLogin }