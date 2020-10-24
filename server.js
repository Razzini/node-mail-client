require('dotenv').config();
const nodemailer = require ('nodemailer');

// etapa 1

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass:  process.env.PASSWORD
    }
});

let mailOptions = {
    from: '',
    to: '',
    subject: 'Teste de envio de email',
    text: 'Teste'
};

// Estapa 3


transporter.sendMail(mailOptions, function(err, data){
    try {
        nsole.log('Email enviado')
    } catch (error) {
        console.log('Ocorreu um erro: ', error);
    }
})