const { v4: uuidv4 } = require('uuid');
const pool = require('../db');


const isUserIDUnique = async (userID) => {
    let isUnique = false;

    while (!isUnique) {

        try {
            const existingUser = await pool.query('SELECT user_id FROM users WHERE user_id = $1', [userID]);
            if (existingUser.rowCount === 0) {
                isUnique = true;
            } else {
                userID = uuidv4();
            }
            
        } catch (error) {
            console.log(`Error getting id ${error}`)
        }

        
    }

    return userID;
};

const createUser = async (username, password, email, firstName, lastName, userID) => {
    //  const { username, password, email, first_name, last_name, date_of_birth, gender, city, state, country, registration_date, last_login_date, account_status, permissions} = req.body  

    const confirmedUserID = await isUserIDUnique(userID);

    const newUser = await pool.query('INSERT INTO users(user_id, username, password, email, first_name, last_name) VALUES($1, $2, $3, $4, $5, $6)', [confirmedUserID, username, password, email, firstName, lastName]);
    
    return newUser

}

module.exports = {
    isUserIDUnique,
    createUser,
    // Other user-related services can be defined here
}