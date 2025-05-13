const User = require('../db_sequelize.js').User;

async function signup(req, res) {
    const details = req.body;

    try {
        let user = await User.findOne({ where: { email: details.email } });

        if (!user) {
            await User.create(details);
            req.flash('signupMessage', 'Signup successful! You can now log in.');
            res.redirect('/login'); // better redirect to login after signup
        } else {
            req.flash('signupMessage', 'That e-mail is already taken');
            res.redirect('/signup');
        }
    } catch (error) {
        console.error(error); // helpful for debugging
        req.flash('signupMessage', 'Error during signup');
        res.redirect('/signup');
    }
}

module.exports = {
    signup
};
