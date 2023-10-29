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

type fetchUserLoginData = {
    username: string;
    userID: string;
    sessionToken: string;
    ipAddress: string;
    success: boolean;
    location: string;
    deviceInfo: string;

}

const gettingIP = async () => {

    try{
        const response = await fetch(`http://localhost:8010/users/getuserip`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            const data = await response.json();
            const userIP = data.userIpAddress;
            console.log("User's ip address:", userIP);
            return userIP;
        } else {
            console.log("Error getting ip address");
        }

    } catch (error){
        console.log("Error getting ip", error)
    }
}

const deviceInformation = () => {

    const userAgent = navigator.userAgent;

    const info = {
        browserName: "Unknown",
        browserVersion: "Unknown",
        os: "Unknown",
        renderingEngine: "Unknown",
      };
  
    const browserMatch = userAgent.match(/(Chrome|Safari|Firefox|Edge|IE|Opera)\/(\S+)/);
    if (browserMatch) {
      info.browserName = browserMatch[1];
      info.browserVersion = browserMatch[2];
    }

    const osMatch = userAgent.match(/\(([^)]+)\)/);
    if (osMatch) {
      info.os = osMatch[1];
    }
  
    const engineMatch = userAgent.match(/AppleWebKit\/(\S+)/);
    if (engineMatch) {
      info.renderingEngine = engineMatch[1];
    }
  
    return info;

}

const geoLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const location = {
                latitude: latitude,
                longitude: longitude
            };

            return location
        });
    } else {
        console.log("Geolocation is not supported in this browser.");
        return ("Not available")
    }

}

const fetchUserLog = async (userLoginData: fetchUserLoginData) => {

    try {
        const dbResponse = await fetch(`http://localhost:8010/users/saveuserinfo`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLoginData)
        })

        console.log("Saved user login db")

    } catch (error) {
        console.log(`Error user login db`, error)
    }

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

const userLogin = async (loginData: loginData) => {

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

            const location = await geoLocation() || "N/A";
            const deviceInfo = JSON.stringify(deviceInformation()) || "N/A";
            const ipAddress = await gettingIP() || "N/A"

            const userLog = {
                "username": loginData.username,
                "userID": responseData.user.user_id,
                "sessionToken": responseData.token,
                "ipAddress": ipAddress,
                "success": true,
                "location": location, 
                "deviceInfo": deviceInfo, 
            }

            await fetchUserLog(userLog);

            return responseData;
        }
        else {
            const responseData = await response.json();
            console.log("error saving log")

            const location = await geoLocation() || "N/A";
            const deviceInfo = JSON.stringify(deviceInformation()) || "N/A";
            const ipAddress = await gettingIP() || "N/A"

            const userLog = {
                "username": loginData.username,
                "userID": responseData.user.user_id,
                "sessionToken": responseData.token,
                "ipAddress": ipAddress,
                "success": false,
                "location": location, 
                "deviceInfo": deviceInfo, 
            }
        }

    } catch (error) {
        console.log(error)
    }
}

export { singupUser, userLogin }