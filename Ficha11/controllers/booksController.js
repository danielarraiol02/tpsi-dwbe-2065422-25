const Book = require('../db_sequelize.js').Book;

async function getAllBooks(req, res) {
    try {
        const books = await Book.findAll();
        res.send(books);
    } catch (error) {
        res.status(500).send("Erro: " + error);
    }
}

async function addBook(req, res){
    try {
        Book.create(req.body).then(newBook => {res.send("ID inserido: " + newBook.book_id)})
    } catch (error) {
        res.status(500).send("Erro: " + error);
    }
}

async function deleteBook(req, res){
    const id_to_delete = req.params.id;

    if (!id_to_delete){
        res.status(500).send("Erro")
    }else{
        try{
            const deletedRows = await Book.destroy({
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

async function updateBook(req, res){

    const id_to_update = req.params.id;
    const {title, author_name, publication_date, genre, available_copies} = req.body;

    //Fazer validaçoes etc

    if (!id_to_update){
        res.status(500).send("Forneça um ID nos parametros de rota");
    }else{
        try{
            const [rowsUpdated] = await Book.update(
                {title, author_name, publication_date, genre, available_copies},
                {
                    where: {
                        book_id: id_to_update,
                    },
                },
            );
            if (rowsUpdated > 0){
                const updatedBook = await Book.findOne({
                    where: {
                        book_id: id_to_update
                    },
                    attributes: {
                        exclude: []
                    }
                });
                res.status(200).json({
                    message : "Livro atualizado com sucesso.\nNovos dados:", 
                    novos_dados: updatedBook.dataValues
                });
                console.log(updatedBook.dataValues);
            }
            else {
                res.status(400).send("Não existe nenhum livro com o ID desejado");
            }
        }
        catch (error){
            res.status(500).send("Erro: " + error);
        }
    }
}

module.exports = {
    getAllBooks,
    addBook,
    deleteBook,
    updateBook
};