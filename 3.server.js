import express from "express";

const app = express();
const porta = 3000;

const produtos = [
    { id: 1, nome: "Carregador", preco: 25.90 },
    { id: 2, nome: "Mouse", preco: 49.99 },
    { id: 3, nome: "Monitor", preco: 119.90 },
    { id: 4, nome: "Fone de ouvido sem fio", preco: 80.00 },
    { id: 5, nome: "Iphone 15", preco: 3000.00 }
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta 3000`);
});