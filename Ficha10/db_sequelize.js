const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/dwbeficha10', {
    pool: {
        max: 10,
        min: 0       
    }
});

const User = require('./models/User.js')(sequelize, Model, DataTypes);
const Book = require ('./models/Book.js')(sequelize, Model,  DataTypes);
const Loan = require('./models/Loan.js')(sequelize, Model, DataTypes);


User.hasMany(Loan, {foreignKey: 'user_id'});
Loan.belongsTo(User, {foreignKey: 'user_id'});

Book.hasMany(Loan, {foreignKey: 'book_id'});
Loan.belongsTo(Book, {foreignKey: 'book_id'});

async function addDBdata() {
    try {
        await sequelize.sync({ force: true }); 

        const users = await User.bulkCreate([
            {
                first_name: 'Alice',
                last_name: 'Smith',
                email: 'alice@example.com',
                address: '123 Main St',
                phone_number: '123456789'
            },
            {
                first_name: 'Bob',
                last_name: 'Johnson',
                email: 'bob@example.com',
                address: '456 Oak Ave',
                phone_number: '987654321'
            }
        ]);

        const books = await Book.bulkCreate([
            {
                title: 'The Great Gatsby',
                author_name: 'F. Scott Fitzgerald',
                publication_date: '1925-04-10',
                genre: 'Novel',
                available_copies: 5
            },
            {
                title: 'To Kill a Mockingbird',
                author_name: 'Harper Lee',
                publication_date: '1960-07-11',
                genre: 'Novel',
                available_copies: 3
            }
        ]);

        const loans = await Loan.bulkCreate([
            {
                user_id: users[0].user_id,
                book_id: books[0].book_id,
                loan_date: '2025-04-27',
                return_date: null
            },
            {
                user_id: users[1].user_id,
                book_id: books[1].book_id,
                loan_date: '2025-04-26',
                return_date: '2025-05-10'
            }
        ]);
    } catch (error) {
        console.error('Erro:' + error);
    }
}

addDBdata();

module.exports = {
    Loan,
    Book,
    User
};

