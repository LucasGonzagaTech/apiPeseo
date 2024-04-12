//importa o módulo express para criar uma aplicação 
//web usando node


//a função require é semelhante ao import do react, ela serve
//para importar módulos para o projeto

const express = require('express');

//Inicializa aplicação express
const app = express();
const cors = require("cors");

//Definindo porta do servidor
const port = 3000;
app.use(cors());

const usuariosRoutes = require('./routes/usuariosRoutes');

app.use(express.json());
app.use('/usuarios', usuariosRoutes);

//configuração de uma rota para raiz ('/') da aplicação
app.get('/', (req, res) => {

     //Resposta em formato de objeto JSON
    res.json({message: 'Rodou:'});
});

//inicializa o servidor na porta definida anteriormente
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});