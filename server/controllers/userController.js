const userService = require('../services/userService');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
    const { username, password, email, first_name, last_name } = req.body;
    const user_id = uuidv4();

    try {
        const newUser = await userService.createUser(username, password, email, first_name, last_name, user_id);
        res.json('Created successfully');
    } catch (error) {
        console.log(`Error creating id: ${error}`)
    }
};

module.exports = {
    createUser,
};
