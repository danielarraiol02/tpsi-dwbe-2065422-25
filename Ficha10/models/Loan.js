module.exports = function (sequelize, Model, DataTypes) {

    class Loan extends Model {}
    Loan.init({
        loan_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id'
            }
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'books',
                key: 'book_id'
            }
        },
        loan_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        return_date: {
            type: DataTypes.DATEONLY,
            allowNull: true 
        }
    }, 
    { 
        sequelize, 
        modelName: 'loan'
    });

    return Loan;
};
