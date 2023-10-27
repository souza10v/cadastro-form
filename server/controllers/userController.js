const userService = require('../services/userService');
const { v4: uuidv4 } = require('uuid');

const createUser = async (req, res) => {
    const { firstName, userName, lastName, userPassword, userEmail } = req.body;

    const userID = uuidv4();
    let errorActual = ""

    try {
        const {newUser, errorActual} = await userService.createUser(firstName, userName, lastName, userPassword, userEmail, userID);
        res.json({ message: 'Created successfully', error: errorActual })
    } catch (error) {
       // console.log(`Error creating id: ${error.detail}`) //apagar
        //res.json({ error: error.detail }) //apagar



        if (error.code === '23505') {
            if (error.detail.includes('email')) {
                console.log('Email already exists.');
                errorActual = 'Email já cadastrado.';
                res.json({ error: errorActual });
            } else if (error.detail.includes('username')) {
                console.log('Username already exists.');
                errorActual = 'Nome de usuário já cadastrado.';
                res.json({ error: errorActual });
            } else {
                console.log(`Other unique constraint violation: ${error.detail}`);
                errorActual = `Entrar em contato com suporte e informar erro: ${error.detail}`;
                res.json({ error: errorActual });
            }
        }
    }
};

module.exports = {
    createUser,
};
