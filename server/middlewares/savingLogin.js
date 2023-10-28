const pool = require('../db');

const saveUserInfo = async (req, res) => {
        const{username, userID, sessionToken, ipAddress, success, location, deviceInfo } = req.body;
        try {
            const response = await pool.query('INSERT INTO users_login(username, user_id, session_token, ip_address, success, location, device_info) VALUES($1, $2, $3, $4, $5, $6, $7)', [username, userID, sessionToken, ipAddress, success, location, deviceInfo])
            console.log('saved')
            res.json("criado com sucesso")
        } catch(error) {
            console.log('error:', error)
        }

}

module.exports = {saveUserInfo}

