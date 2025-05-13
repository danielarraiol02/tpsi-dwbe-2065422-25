const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

var fs = require('fs');
var dataObj = JSON.parse(fs.readFileSync('./people.json'), 'utf-8'); //servidor arranca, lê td o que tem para ler e depois resume ; forma assíncrona para callbacks

// var fileContent = fs.readFileSync('./people.json');
// var dataObj = JSON.parse(fileContent);


app.get('/users', (req, res) => {
  // COLOCA CODIGO HTTP A 200, resposta com sucesso (correu tudo bem do lado do sv) e envia algo ao cliente
  res.send(dataObj);
})

app.post('/users', (req, res) => { //Objeto complexo - enviar sempre pelo body
  var max = dataObj.data[0].id;
  for (let i = 0; i < dataObj.data.length; i++){
    if (dataObj.data[i].id > max){
      max = dataObj.data[i].id;
    }
}
  var newPerson = req.body;
  newPerson.id = max+1;
  dataObj.data.push(newPerson);
  //res.send(dataObj); // JA HA ENDPOINT PARA LISTAR TODOS OS USERS
  
})

// app.delete('/users/:id', (req, res) => { //Passar o id que queremos para o -1 e usar o .pop temp = array[i]; array[i] = array[length-1]; length-1 = temp
//   var id_to_delete = req.params.id;
//   var newArray = [];
//   for (let i = 0; i < dataObj.data.length; i++){
//     if (dataObj.data[i].id != id_to_delete){
//       newArray.push(dataObj.data[i]);
//     }
//   }
//   dataObj.data = newArray;
// })

app.delete('/users/:id', (req, res) => {
  var id_to_delete = req.params.id;
  var found = false;
  for (let i = 0; i < dataObj.data.length; i++){
    if (dataObj.data[i].id == id_to_delete){
      found = true;
      let temp = dataObj.data[i];
      dataObj.data[i] = dataObj.data[dataObj.data.length - 1]; //const result = dataObj.data.filter((person) => person.id != id); dataObj.data = result;
      dataObj.data[dataObj.data.length - 1] = temp;
      dataObj.data.pop();
      break;
    }
  }
  if (!found){
    res.send("ID not found");
  }
  else{
    res.send("ID: " + id_to_delete + " was deleted");
  }
})

app.get('/users/:id', (req, res) => {

  var id_to_show = req.params.id;
  var person = null;

  for (let i = 0; i < dataObj.data.length; i++){
    if (dataObj.data[i].id == id_to_show){
      person = dataObj.data[i];      
    }
  }
  if (person){
    res.send(person);
  }else{
    res.status(404).send("ID not found");
  }
})

app.put('/users/:id', (req, res) => {
  
  var id_to_alter = req.params.id;
  var found = false;
  for (let i = 0; i < dataObj.data.length; i++){
    if (dataObj.data[i].id == id_to_alter){
      found = true;
      dataObj.data[i] = req.body;
      dataObj.data[i].id = id_to_alter;
      //res.send(dataObj.data[i]);      
    }
  }
  if (!found){
    res.status(404).send("ID not found");
  }else{
    res.send("Muito bemmmmmmmmmmm")
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// LER FICHEIRO JSON
// PARSE - STR -> OBJ
// STRINGIFY - OBJ -> STR

// Depois de delete, post, put; fs.writesync -> reescrever alterações