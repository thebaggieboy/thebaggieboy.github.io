export default function handler(req, res){
    const {email, subject, message} = req.body;
    res.json({email, subject, message, messageStatus});
    res.status = 200

    messageStatus = true;
   

    console.log(`Email: ${email} \n Subject: ${subject} \n Message: ${message}`);
}