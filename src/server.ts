import { Request, Response } from "express";

const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

app.use(express.static('dist/public'));

app.get('/tarefas', async (req: Request, res: Response) => {

    try {

        await client.connect();

        const tarefas = await client.db('tarefasDb')
            .collection('tarefas')
            .find({})
            .toArray();

        res.json(tarefas);

    } finally {
        await client.close();
    }


});

app.listen(3000, () => {
    console.log('NodeJS no ar \u2764');
});