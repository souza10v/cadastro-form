
type UserDataPros = {
    firstName: string;
    userName: string;
    lastName: string;
    userPassword: string;
    userEmail: string;
    userGender: string;
}

const singupUser = async ( userData : UserDataPros) => {

    //const response = await fetch(`http://localhost:8010/users/createuser`, {

    try{
        const response = await fetch(`http://localhost:8010/users/createuser`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (response.status === 200){
            console.log("fetch realizado com sucesso")
          }
        
    } catch(error){
        console.log(error)
    }


}

export default singupUser