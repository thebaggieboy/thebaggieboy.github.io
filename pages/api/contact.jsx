export default function handler(req, res){
    const {email, subject, message} = req.body;
    res.json({email, subject, message});
    res.status = 200

    
   

    console.log(`Email: ${email} \n Subject: ${subject} \n Message: ${message} \n `);
}