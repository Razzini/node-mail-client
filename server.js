const express = require('express');
const sendMail = require('./mail')
const log = console.log();
const app = express();
const path = require('path');


const PORT = 8080;


//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static(__dirname + '/views'))


//send mail

app.post('/email', (req, res)=>{

    const { email, cc, subject, text} = req.body;
    console.log('Data: ', req.body);

    sendMail(email, cc, subject, text, function(err, data){
        if (err){
            res.status(500).json({message: 'Erro interno'});
        }else{
            res.json({message: 'Email enviado'})
        }
    });
    res.json({message: 'Menssagem recebida'})
});



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});



app.listen(PORT, () => console.log('O servidor esta executando na porta, ', 8080));

