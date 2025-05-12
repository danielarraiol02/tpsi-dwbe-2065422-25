const { Sequelize, Model, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('dwbeficha9', 'root', 'password', {dialect: 'mysql'});
const sequelize = new Sequelize('mysql://root:password@localhost:3306/dwbeficha9');
const Car = require('./models/car.js')(sequelize, Model, DataTypes);
const Dealership = require('./models/dealership.js')(sequelize, Model, DataTypes);


const mysql = require('mysql2');
const express = require('express');


const app = express();
const port = 3000;

app.use(express.json());


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


sequelize.authenticate().then(() => {
    console.log("Connection has been established ");
}).catch(err =>{
    console.log("Unable to connect: " + err)
});

function isValidJson(str){
    try{
        JSON.parse(str);
    }catch(error){
        return false;
    }
    return true;
}

// const Car = sequelize.define('car', {
//     Brand: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     Model: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     LicensePlate: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     Color: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     Year: {
//         type: Sequelize.SMALLINT,
//         allowNull: false
//     },
//     Power: {
//         type: Sequelize.SMALLINT,
//         allowNull: false
//     },
//     Displacement: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//     }
// });


// sequelize.sync()
//     .then(() => {
//         console.log('Database & tables created!');
//     })
//     .catch(err => {
//         console.error('Error syncing database:', err);
//     });

// sequelize.authenticate()
//     .then(() => {
//         console.log("Connection has been established");
//     })
//     .catch(err => {
//         console.log("Unable to connect: " + err);
//     });

/*
(async () =>{
    await sequelize.sync({ force: true} );
    const cars = await Car.bulkCreate([
        {
            brand: 'bmw',
            model: '240',
            licensePlate: '23-43-ZZ',
            color: 'RED',
            year: 2025,
            power: 300,
            displacement: 3000
        },
        {
            brand: 'audi',
            model: 'A4',
            licensePlate: '11-22-AA',
            color: 'BLACK',
            year: 2023,
            power: 190,
            displacement: 2000
        },
        {
            brand: 'mercedes',
            model: 'C200',
            licensePlate: '55-66-BB',
            color: 'WHITE',
            year: 2024,
            power: 204,
            displacement: 1991
        },
        {
            brand: 'toyota',
            model: 'Supra',
            licensePlate: '77-88-CC',
            color: 'YELLOW',
            year: 2022,
            power: 382,
            displacement: 3000
        },
        {
            brand: 'ford',
            model: 'Focus ST',
            licensePlate: '99-00-DD',
            color: 'BLUE',
            year: 2021,
            power: 280,
            displacement: 2261
        }
    ]);
    console.log(cars.map(car => car.toJSON()));
})();*/

app.get('/cars', async function (req, res) {
    try{
        const cars = await Car.findAll();
        res.send(cars)
    }
    catch{
        res.status(500).send("Erro");
    }
});

app.post('/cars', async function (req, res){

    /*const carDetails = req.body;

    const newCar = await Car.create(
        {
            brand: carDetails.brand,
            model: carDetails.model,
            licensePlate: carDetails.licensePlate,
            color: carDetails.color,
            year: carDetails.year,
            power: carDetails.power,
            displacement: carDetails.displacement
        }
    );
    res.json("ID criado: " + newCar.id);*/

    Car.create(req.body).then(newCar => {res.send("ID inserido: " + newCar.id)})
});

app.delete('/cars', async function (req, res){

    const id_to_delete = req.body.id;

    if (isNaN(id_to_delete))
    {
        res.status(500).send("Deve introduzir um ID válido (formato JSON)");
    }
    else{
        try{
            const deletedRows = await Car.destroy({
                where: {
                    id: id_to_delete
                }
            }); 

            if (deletedRows > 0){
                res.send(deletedRows + " registos alterados com sucesso");
            }
            else{
                res.status(404).send("O ID introduzido não existe");
            }

        }
        catch (error){
            console.log("Erro na consulta: " + error);
            res.status(500).send("Erro");
        }
    }    
})

app.delete('/cars/:plate', async function (req, res){

    const plate_to_delete = req.params.plate;

    if (!plate_to_delete){
        res.status(500).send("Erro")
    }else{
        try{
            const deletedRows = await Car.destroy({
                where: {
                    licensePlate: plate_to_delete
                }
            });
            if (deletedRows > 0){
                res.send("Registos apagados com sucesso: " + deletedRows);
            }
            else{
                res.send("Não existe");
            }
        }
        catch (error){
            res.status(500).send("Erro" + error)
        }
    }   
})

app.get('/cars/:id', async function (req, res){

    id_to_find = req.params.id;

    try{
        const car = await Car.findByPk(id_to_find);
        res.send(car);
    }
    catch (error){
        res.send("woow erro" + error)
    }
})

app.get('/cars/:brand/:model', async function (req, res){

    try{
        const cars = await Car.findAll({
            where: {
                brand: req.params.brand,
                model: req.params.model
            }
        });
        if (cars.length == 0){
            res.send("Não existem carros com essa marca e modelo")
        }
        else{
            res.send(cars);
        }
    }
    catch (error){
        res.send("erro: " + error)
    }
})

