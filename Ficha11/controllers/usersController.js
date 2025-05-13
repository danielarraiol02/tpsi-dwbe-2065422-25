const User = require('../db_sequelize.js').User;

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        res.status(500).send("Erro: " + error);
    }
}

async function addUser(req, res){
    try {
        User.create(req.body).then(newUser => {res.send("ID inserido: " + newUser.user_id)})
    } catch (error) {
        res.status(500).send("Erro: " + error);
    }
}

async function deleteUser(req, res){
    const id_to_delete = req.params.id;

    if (!id_to_delete){
        res.status(500).send("Erro")
    }else{
        try{
            const deletedRows = await User.destroy({
                where: {
                    user_id: id_to_delete
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
            res.status(500).send("Erro" + error);
        }
    }
}

async function updateUser(req, res){

    const id_to_update = req.params.id;
    const {first_name, last_name, email, address, phone_number} = req.body;

    if (!id_to_update){
        res.status(500).send("Forneça um ID nos parametros de rota");
    }else{
        try{
            const [rowsUpdated] = await User.update( // Modelo letra maiuscula
                {first_name, last_name, email, address, phone_number},
                {
                    where: {
                        user_id: id_to_update,
                    },
                },
            );
            if (rowsUpdated > 0){
                const updatedUser = await User.findOne({
                    where: {
                        user_id: id_to_update
                    },
                    attributes: {
                        exclude: []
                    }
                });
                res.status(200).json({
                    message : "Utilizador atualizado com sucesso.\nNovos dados:", 
                    novos_dados: updatedUser.dataValues
                });
                console.log(updatedUser.dataValues);
            }
            else {
                res.status(400).send("Não existe nenhum utilizador com o ID desejado");
            }
        }
        catch (error){
            res.status(500).send("Erro: " + error);
        }
    }
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser
};