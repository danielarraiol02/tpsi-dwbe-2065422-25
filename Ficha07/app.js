const express = require('express');
const mysql = require('mysql');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');


const app = express();
const port = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dwbeficha7'
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


async function run_query (query, res, params = []){

    pool.getConnection((error, connection) => {
        if (error){
            res.status(500).send("Erro ao conectar à BD");
            return;
        }
        console.log("Conectado à BD");
        connection.query(query, params, (error, results) => {
            connection.release();
            if (error){
                res.status(500).send("Erro na consulta: " + error);
                return;
            }
            return results;
        });
    });

}

app.get('/users', function (req, res) {
    query_to_run = "SELECT * from users";
    //await run_query(query_to_run, res);
});

app.post('/users', function (req, res) {

    const details = req.body;
    const query_to_run = 'INSERT INTO users SET ?';
    run_query(query_to_run, res, [details]); 

});


app.delete('/users', function (req, res) {
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send("Erro");
            return;
        }
        console.log("Conectado");

        const { ID } = req.body;
    
        if (!ID)
            return res.status(500).send("Deve haver um ID");

        connection.query('DELETE FROM users WHERE ID = ?', [ID], (error, results) => {
            connection.release();
            if (error) {
                res.status(500).send("Erro");
                return;
            }
            res.send({ message: "Utilizador apagado com sucesso", affectedRows: results.affectedRows });
        });
    });
});

app.delete('/users/:id', function (req, res) {
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send("Erro");
            return;
        }
        console.log("Conectado");

        const ID = req.params.id;
        if (!ID)
            return res.status(500).send("Deve haver um ID");

        connection.query('DELETE FROM users WHERE ID = ?', [ID], (error, results) => {
            connection.release();
            if (error) {
                res.status(500).send("Erro");
                return;
            }
            res.send({ message: "Utilizador apagado com sucesso", affectedRows: results.affectedRows });
        });
    });
});

app.get('/users/:id', function (req, res) {
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send("Erro");
            return;
        }
        console.log("Conectado");

        const ID = req.params.id;
        connection.query('SELECT * FROM users WHERE ID = ?', [ID], (error, results) => {
            connection.release();
            if (error) {
                res.status(500).send("Erro");
                return;
            }
            res.send(results);
        });
    });
});

app.get('/users/:age/:profession', function (req, res){

    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send("Erro");
            return;
        }
        console.log("Conectado");

        const age = req.params.age;
        const profession = req.params.profession;

        connection.query('SELECT * FROM users WHERE age = ? AND profession = ?', [age, profession], (error, results) => { //Cada ponto de interrogação corresponde a um indice na lista de valores. a ordem tem de estar certa
            connection.release();
            if (error) {
                res.status(500).send("Erro");
                return;
            }
            res.send(results);
        });
    });
});

app.put('/users/:id', function (req, res) {  //Se for para alterar so 1 campo, criar endpoint para isso
    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).send("Erro");
            return;
        }
        console.log("Conectado");

        const ID = req.params.id;
        const details = req.body;
        const values = [details.first_name, details.last_name, details.profession, details.age, ID];
        if (!ID)
            return res.status(500).send("Deve haver um ID");

        connection.query('UPDATE users SET first_name = ?, last_name = ?, profession = ?, AGE = ? WHERE ID = ?', [values], (error, results) => {
            connection.release();
            if (error) {
                res.status(500).send("Erro");
                return;
            }
            res.send({ message: "Utilizador atualizado com sucesso", affectedRows: results.affectedRows });
        });
    });
});




//Put results.changedRows