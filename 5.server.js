import express from "express";

const app = express();
const porta = 3000;

app.use(express.json());

let tarefas = [
    { id: 1, nome: "Ir a escola" },
    { id: 2, nome: "Fazer os deveres de casa" },
    { id: 3, nome: "Ir treinar na academia" }
];

app.get("/tarefas", (req, res) => {
    res.json(tarefas);
});

app.get("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefas.find((t) => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            mensagem: "Tarefa não encontrada"
        });
    }

    res.json(tarefa);
});

app.post("/tarefas", (req, res) => {
    const novaTarefa = {
        id: tarefas.length > 0
            ? Math.max(...tarefas.map((t) => t.id)) + 1
            : 1,
        nome: req.body.nome
    };

    if (!novaTarefa.nome) {
        return res.status(400).json({
            mensagem: "Informe o nome da tarefa"
        });
    }

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

app.delete("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex((t) => t.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Tarefa não encontrada"
        });
    }

    const tarefaRemovida = tarefas.splice(indice, 1);

    res.json({
        mensagem: "Tarefa removida",
        tarefa: tarefaRemovida[0]
    });
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta 3000`);
});