import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor', 'nome')
        .exec((err, livros) => {
            res.status(200).json(livros);
        });
    };

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Livro não encontrado.`})
            } else {
                res.status(200).send(livros);
            }
        });
    };

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }

    static incluirLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao incluir livro`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso.'});
            } else {
                res.status(500).send({message: err.message});
            }
        });
    };

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndRemove(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro deletado com sucesso.'});
            } else {
                res.status(400).send({message: `${err.message} - Livro não encontrado`});
            }
        });
    };

}

export default LivroController;