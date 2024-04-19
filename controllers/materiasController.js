const express = require('express');
const router = express.Router();
const dbConecta = require ('../models/dbConexao');


//GET
router.get('/', (req, res) =>{
    dbConecta.query('SELECT * FROM tbMaterias', (err, result) =>{
        if(err) throw err;
        res.json(result)
    })
});

//POST
router.post('/', (req, res) =>{
    const {idMateria, nome, idDisciplina} = req.body;
    const query = 'INSERT INTO tbMaterias (idMateria, nome, idDisciplina) VALUES (?,?,?)';

    dbConecta.query( query, [idMateria, nome, idDisciplina], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao adicionar usuário.'});

        }else {
            res.status(201).json({
                message: 'Usuario adicionado!',
                idAdm: result.insertId,
                body: req.body
            });
        }
    });
});

//DELETE
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const query = `DELETE FROM tbAdms WHERE idAdms = ?`;

    dbConecta.query(query, [id], (err, result) =>{
        if(err) {
            res.status(500).json({message: 'Erro ao deletar usuario'});
        } else {
            res.status(201).json({
                message: `Usuario de id ${id}, deletado com sucesso!`
            });
        }
    });
});

//PUT / UPDATE

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nome, idDisciplina} = req.body;
    const queryn = `UPDATE tbAdms SET nome = ?, idAulaPendente = ? WHERE idAdm = ?`

    dbConecta.query(queryn, [nome,idAulaPendente,id], (err, result)=>{
        if (err) {
            res.status(500).json({message: 'Erro ao alterar informação do usuário.'});
        } else {
            res.status(201).json({
                message: `Alteração aplicada`,
                envio:{
                    id: id,
                    nome: nome,
                    idDisciplina: idDisciplina,
                }
            })
        }
    })
});

module.exports = router;