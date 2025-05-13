const Loan = require('../db_sequelize.js').Loan;
const User = require('../db_sequelize.js').User;
const Book = require('../db_sequelize.js').Book;

async function getAllLoans(req, res, next){
    var loans = await Loan.findAll();
    res.send(loans);
}

async function getAllLoansFull(req, res, next){
    var loans = await Loan.findAll({include: [{model: User}, {model:Book}]});
    res.send(loans);
}

async function addLoan(req, res){
    try {
        Loan.create(req.body).then(newLoan => {res.send("ID inserido: " + newLoan.loan_id)})
    } catch (error) {
        res.status(500).send("Erro: " + error);
    }
}

async function deleteLoan(req, res){
    const id_to_delete = req.params.id;

    if (!id_to_delete){
        res.status(500).send("Erro")
    }else{
        try{
            const deletedRows = await Loan.destroy({
                where: {
                    loan_id: id_to_delete
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

async function updateLoan(req, res){

    const id_to_update = req.params.id;
    const {user_id, book_id, loan_date, return_date} = req.body;

    //Fazer validaçoes etc

    if (!id_to_update){
        res.status(500).send("Forneça um ID nos parametros de rota");
    }else{
        try{
            const [rowsUpdated] = await Loan.update(
                {user_id, book_id, loan_date, return_date},
                {
                    where: {
                        loan_id: id_to_update,
                    },
                },
            );
            if (rowsUpdated > 0){
                const updatedLoan = await Loan.findOne({
                    where: {
                        loan_id: id_to_update
                    },
                    attributes: {
                        exclude: []
                    },
                    include: [{model: User}, {model:Book}]
                });
                res.status(200).json({
                    message : "Emprestimo atualizado com sucesso.\nNovos dados:", 
                    novos_dados: updatedLoan.dataValues
                });
                console.log(updatedLoan.dataValues);
            }
            else {
                res.status(400).send("Não existe nenhum emprestimo com o ID desejado");
            }
        }
        catch (error){
            res.status(500).send("Erro: " + error);
        }
    }
}

module.exports = {
    getAllLoans,
    getAllLoansFull,
    addLoan,
    updateLoan,
    deleteLoan
};