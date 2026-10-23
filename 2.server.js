import express from "express";

const app = express();
const porta = 3000 

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Seja bem-vindo aos nossos cursos!");
});

app.get("/cursos", (req, res)=> {
    res.send("Cursos oferecidos: Lógica de programação, Banco de dados e Desenvolvimento de sistemas");
});

app.get("/professores", (req, res)=> {
    res.send("Nossos professores são: Samuel e Willer");
});

app.get("/contato", (req, res)=> {
    res.send("Entre em contato conosco: cursos@gmail.com ou (48) 0099-8870");
});

app.use((req, res) => {
    res.status(404).send("Erro 404: Página não encontrada.");
});

app.listen(porta, () => {
    console.log("Servidor rodando na porta 3000");
});