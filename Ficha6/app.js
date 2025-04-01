const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

var fs = require('fs');

const logFile = './log.txt';

if (!fs.existsSync(logFile)){
    var createFile = fs.createWriteStream("log.txt");
    createFile.end();
}
function log (req, res){
    var path = req.route.path;
    var method = req.method;
    var date = new Date();

    var str = "Path: " + path + " Method: " + method + " Date: " + date + "\n";
    fs.appendFileSync("log.txt", str);
}

app.get('/', function (req, res){
    log(req,res);
    //escrever no log.txt 
    const body = 'hello world';

    res.writeHead(200,{
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/plain'});
    res.end(body);
    })

app.get('/html', function (req, res){
    log(req,res);
    //escrever no log.txt 
    const body = '<html><h1>Hello World</h1><html>';

    res.writeHead(200,{
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/html'});
    res.end(body);
    })

app.get('/html-file', function (req, res){
    log(req,res);

    const body = fs.readFileSync("index.html", "utf-8");

    res.writeHead(200,{
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/html'});
    res.end(body);
})

app.get('/html-greeting', function (req, res){
    log(req,res);

    const body = fs.readFileSync("index.html", "utf-8");

    const regex = /Hello World/i;
    
    var date = new Date();
    var newBody = body.replace(regex, date);

    res.writeHead(200,{
        'Content-Length' : Buffer.byteLength(newBody),
        'Content-Type' : 'text/html'});
    res.end(newBody);
})

app.get('/user/:name', function(req, res){
    log(req, res);
    
    const name = req.params.name;
    const regex = /World/i;

    var body = fs.readFileSync("index.html", "utf-8");
    var newBody = body.replace(regex, name);

    res.writeHead(200,{
        'Content-Length' : Buffer.byteLength(newBody),
        'Content-Type' : 'text/html'});
    res.end(newBody);
})

app.get('/log', function (req, res){

    var body = fs.readFileSync('./log.txt');

    res.writeHead(200,{
        'Content-Length' : Buffer.byteLength(body),
        'Content-Type' : 'text/plain'});
    res.end(body);

})

app.get('/download-log', function (req, res){

    log(req, res);
    const filePath = './log.txt';
  
    res.download(filePath, null, (err) => {
        if (!err) {
          res.status(200).send('Nice');
        } else {
          res.status(500).send('Not nice');    
        }
      });
})

app.delete('/clear', function (req, res){

    const file = "./log.txt";

    try {
        fs.rmSync(file);
        res.status(200).send('Apagado com sucesso!');
    } catch (err){
        res.status(500).send('Erro ao apagar o ficheiro');
    }
    
})

