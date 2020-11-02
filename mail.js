const nodemailer = require ('nodemailer');

// etapa 1


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'razzini.thiago@gmail.com',
        pass:  'bxfUG1W9w2'
    }
});


const sendMail = (email,  cc, subject, text, cb) =>{
    let mailOptions = {
        from: 'razzini.thiago@gmail.com',
        to: email,
        cc: cc,
        subject,
        text
    };
    
    // Estapa 3
    
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail;










