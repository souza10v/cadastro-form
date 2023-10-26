const userService = require('../services/userService');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;
    const userID = uuidv4();

    console.log(userID)

    try {
        const {newUser, errorActual} = await userService.createUser(username, password, email, first_name, last_name, userID);
        res.json({ message: 'Created successfully', error: errorActual })
    } catch (error) {
        console.log(`Error creating id: ${error}`)
    }
};

module.exports = {
    createUser,
};
