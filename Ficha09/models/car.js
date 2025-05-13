module.exports = function (sequelize, Model, DataTypes){

    class Car extends Model{}
        Car.init({
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        licensePlate: DataTypes.STRING,
        color: DataTypes.STRING,
        year: DataTypes.SMALLINT,
        power: DataTypes.SMALLINT,
        displacement: DataTypes.FLOAT 
    },
        { sequelize, modelName: 'car'}
    );
    return Car
};
