const { DataTypes } = require('sequelize');

module.exports = function (sequelize, Model, DataTypes) {
    
    class Book extends Model {}
    Book.init({
        book_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publication_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        available_copies: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, 
    { 
        sequelize, 
        modelName: 'book'
    });

    return Book;
};
