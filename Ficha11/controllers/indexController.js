const User = require('../db_sequelize.js').User;
const auth = require("../utils/auth");


async function signup(req, res) {
    const details = req.body;

    try {
        let user = await User.findOne({ where: { email: details.email } });

        if (!user) {
            let created_user = await User.create(details);
            req.flash('signupMessage', 'Signup successful! You can now log in.');
        } else {
            req.status(401).send('signupMessage', 'That e-mail is already taken');
        }
    } catch (error) {
        console.error(error); 
        req.flash('signupMessage', 'Error during signup');
    }
}

async function login(req, res) {
    const details = req.body;

    try {
        let user = await User.findOne(
            { 
                where: { 
                    email: details.email,
                    password: details.password
                } 
            });

        if (user) {
            const token = auth.generateAccessToken(details.email, details.password);
            res.json({user:user, bearer_token: token})
            
        } else {
            res.status(401).json({ message:  'A PW ou o e-mail estão incorretos.'});
        }
    } catch (error) {
        res.status(500).json({message: error});
    }
}



module.exports = {
    signup,
    login
};
