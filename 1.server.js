import express from "express";

const app = express();
const porta = 3000 

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Bem-vindo a nossa empresa!");
});

app.get("/sobre", (req, res)=> {
    res.send("Somos a TechStore Júnior, uma empresa que trabalha com acessórios para celular, informática e eletrônicos simples");
});

app.listen(porta, () => {
    console.log("servidor rodando na porta 3000");
});