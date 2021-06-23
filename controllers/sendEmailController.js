const customerError = require("../config/customError");
require("dotenv").config();
const nodeMail = require('../utilities/nodeMail')

const sendEmailController = async(req, res, next) => {

    //toUser is the recepient, fromUser is the sender
    const {fromEmail, toEmail, subject, message, username} = req.body    
        // console.log(req.body)
        nodeMail(fromEmail, toEmail, subject, message, username)        
        await (res.json({ msg: `You have sent an email to ${toEmail}`, status: 200 })) 
         
        // the following two lines are from the original template
        //.then(res.json({ msg: `You have sent an email to ${toEmail}`, status: 200 }))   
        //.catch(err=>err.message)              
        }  


module.exports = sendEmailController