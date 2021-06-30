const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//const link = `${req.protocol}://localhost:4000/reset_password/${token}`;

const sendPwResetEmail = (token) => {

const msg = {
  //johnnycbcs@gmail.com, you can replace this with your own email address to try
  to: 'service.exchange.platform.2021@hotmail.com', // Change to your recipient
  //IMPORTANT!!!!!! The following email shall not be changed !!!!!!!!!!!!!
  from: 'service.exchange.platform.2021@gmail.com', // Change to your verified sender
  subject: 'Here comes the reset password link!!',
  text: `There is link to reset your password`,
  html: `
        <strong>and easy to do anywhere, even with Node.js</strong>
        <a href="http://localhost:3000/reset_password/${token}"> Click Here to Change Password </a>
        <ol>
          <li>The token is valid for <strong><italic>60 minutes</italic></strong> by the time the email sent to you.</li>
          <li>The link can be used a multiple times before the token becomes invalid.</li>
          <li>Plase make sure you follow the password pattern to reset a new one for yourself.</li>
          <li>If you follow the link but without resetting a new password successfully, please come back here to click the link again before the token becomes invalid.</li>
        </ol>
        `,
}
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

//sgMail itself is a promise, but the whole function is not
//this is to convert the whole function into a promise
//so sendPwResetEmail function can be converted into a promise to be used with .then
    return sgMail.send(msg)
  }

module.exports = sendPwResetEmail 


// const sendPwResetEmail = (receiver, source, subject, content) => {

//     try {
//       const data = {
//         to: receiver,
//         from: source,
//         subject,
//         html: content,
//       };
//       return sgMail.send(data);
//     } catch (e) {
//       return new Error(e);
//     }
//   };

  
// const msg = {
//   to: 'hidomi@gmail.com', // Change to your recipient
//   from: 'cybersagittarius@hotmail.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: `and easy to do anywhere, even with Node.js, BTW, here is your ${token}`,
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// }



//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// export default sendEmail;


// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })