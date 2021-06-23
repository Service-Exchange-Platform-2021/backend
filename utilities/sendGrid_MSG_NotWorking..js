const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMeetingEmail = (fromEmail, toEmail, subject, message, username) => {

    const msg = {
        to: `${toEmail}`, // Change to your recipient
        from: 'service.exchange.platform.2021@gmail.com', // Change to your verified sender               
        html: `
            <h1>Service Exchange</h1>
            <h2>${subject}</h>,
            <p>${message}</p>
            <strong>Please contact ${username} at ${fromEmail} </strong>                          
              `,   
    }

    return sgMail.send(msg)
}

module.exports = sendMeetingEmail
