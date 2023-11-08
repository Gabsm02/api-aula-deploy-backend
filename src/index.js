require("dotenv").config();
const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const carros = await knex("carros");
        return res.json(carros);
    } catch {
        return res.status(500).json({ mensagem: "Erro do servidor" });
    }
});

app.listen(process.env.PORT);
