const router = require("express").Router()
const nodeMailer = require("nodemailer")

router.post('/contact',(req,res)=>{
    let data = req.body

    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg:"Please fill all the fields"})}

        let smtpTransporter = nodeMailer.createTransport({
            service: 'Gmail',
            port:465,
            auth:{
                user:'portfoliocontactmejr@gmail.com',
                type:"OAuth2",
                clientId:"859040007974-s93aldkvmvjhlu2dn9iogd0cjs4q394n.apps.googleusercontent.com",
                clientSecret:"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",
                refreshToken:"1//04Ojx6HFdt18BCgYIARAAGAQSNwF-L9IrqsbdCf_dzR0S8LAx47ZsUxGwHZYeV-pq8VuQ5WvbV0tPnnDLKk89oMhXJqrueNfbchs"
            }
        })

        let mailOptions = {
            from:data.email,
            to:'portfoliocontactmejr@gmail.com',
            subject:`message from ${data.name}`,
            html:`
            
            <h3>Information<h3/>
            <ul>
            <li>Name : ${data.name}<li/>
            <li>Email : ${data.email}<li/>
            <ul/>

            <h3>Message<h3/>
            <p>${data.message}<p/>

            `
        }

        smtpTransporter.sendMail(mailOptions,(error)=>{

            try {
                if(error)return res.status(400).json({msg:"Please fill all the fields"})
                res.status(200).json({msg:"thenk you for contactme"})

            } catch (error) {
                if(error) return res.status(500).json({msg:"There is sercer error "})
            }
        })
    

        console.log(mailOptions)
})

module.exports = router;