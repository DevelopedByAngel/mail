const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();
var mailtransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'remainderevent@gmail.com',
    pass: 'remainder111'
  }
});
app.use(bodyParser.json());
app.use(cors());
app.post('/',(req,res) =>
{
	const{ name,email,message} = req.body;
	console.log(name,email,message);
	var mailOptions1 = {
	  from: 'remainderevent@gmail.com',
	  to: email,
	  subject:"Smart Agro System",
	  html:  '<p> Hi '+name+'<br><strong>Greetings from Agro Pro\'s </strong>.<br>Thanks for showing interest in our idea. Soon our team will contact you</p><img width="100" height="100" src="https://developedbyangel.github.io/SAS/logo.PNG"><br><br><br><p>Regards,<br><em>Team Agro Pro\'s</em></p>'
	};

	mailtransport.sendMail(mailOptions1, function(error, info){
	  if (error) {
	    console.log('eror')
	  } else {
	    console.log('sent')
	  }
	});
	var mailOptions2 = {
	  from: 'remainderevent@gmail.com',
	  to: 'angelfrancis1111@gmail.com',
	  subject:"Smart Agro System",
	  html: '<p>' +name+' with email '+email+' wants to connect<br><br></p><p>'+message+'</p>'
	};

	mailtransport.sendMail(mailOptions2, function(error, info){
	  if (error) {
	    res.json('error')
	  } else {
	    res.json('mail sent')
	  }
	});
})
app.listen(2000,()=>
{
	console.log('ok');
})