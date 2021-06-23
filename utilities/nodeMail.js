const nodemailer = require('nodemailer');
require('dotenv').config()

const nodeMail = (fromEmail, toEmail, subject, message, username) =>{              

    const transporter = nodemailer.createTransport({

            host: 'smtp-mail.outlook.com',
            port: 587,            
            auth: {
                user: `${process.env.EMAIL_ACCOUNT}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
            },
        });

    const mailOptions = {
        from: `${process.env.EMAIL_ACCOUNT}`, 
        //to: `${toEmail}`
        to: `service.exchange.platform.2021@hotmail.com`, 
        subject: `${subject}`,
        text: `${message}`,
        html: `
            <h1>Service Exchange</h1>
            <h2>${subject}</h>,
            <p>${message}</p>
            <strong>Please contact ${username} at ${fromEmail} </strong>                          
              `,   
        };
                
        console.log('sending mail');

        transporter.sendMail(mailOptions, (err, res, next)=>{
            if(err){
                console.log('there was an error: ', err);
                } else {

                // resolve(res.status(200).json({ msg: `You have sent an email to ${toEmail}`, status: 200 }))
                // console.log('here is the res: ', res);
                //resolve(res.status(200).json('email sent')); 
                next();
                }
            })           
        } 

module.exports = nodeMail