const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


let vetor = [];


app.get('/items', (req, res) => {
  res.json(vetor);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  vetor.push(newItem);
  res.json(newItem);
});


app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  vetor[itemId] = updatedItem;
  res.json(updatedItem);
});


app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const deletedItem = vetor[itemId];
  vetor.splice(itemId, 1);
  res.json(deletedItem);
});


const port = 3002;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});