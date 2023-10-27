const userService = require('../services/userService');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
    const { firstName, userName, lastName, userPassword, userEmail } = req.body;

    const userID = uuidv4();

    try {
        const {newUser, errorActual} = await userService.createUser(firstName, userName, lastName, userPassword, userEmail, userID);
        res.json({ message: 'Created successfully', error: errorActual })
    } catch (error) {
        console.log(`Error creating id: ${error}`)
    }
};

module.exports = {
    createUser,
};
