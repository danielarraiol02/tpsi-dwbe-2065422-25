const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dwbeficha9', 'root', 'password', {dialect: 'mysql'});
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

const Car = sequelize.define('car', {
    Brand: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LicensePlate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Year: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    Power: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    Displacement: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.log("Unable to connect: " + err);
    });