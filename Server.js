const http = require ('http')
const server = http.createServer((req, res)=>{
    res._writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Hello ApiRest!!!</h1>\n');
});
server.listen(3000,() =>{
    console.log('Server running on port 3000');
});

server.get('/getRequest', (req,res)=>{
    res.send('hello this is successfull Get Request')
});
server.post('/postRequest',(req,res)=>{
    res.send('hello this is succesfull Post Request')
});
server.put('/putRequest', (req, res)=>{
    res.send('/')
});
server.delete('/deleteRequest', (req, res)=>{
    res.send('/')
});