module.exports = function (sequelize, Model, DataTypes){

    class Dealership extends Model{}
        Dealership.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        email: DataTypes.STRING,
        telephone: DataTypes.STRING 
    },
        { sequelize, modelName: 'dealership'}
    );
    return Dealership;
};
