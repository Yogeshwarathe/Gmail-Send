var fs = require('fs');
var path = require('path');
// var config = JSON.parse(fs.readFileSync("config.json"));

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',

	secure: false,
	port: 25,
	auth: {
		user: 'yogesh18@navgurukul.org', // Enter your gmail 
		pass: 'Enter your password' // Enter your password
	},
	tls: {	
		rejectUnauthorized: false
	}
})

// this email send all student => 'all@navgurukul.org'

let HelperOption = {
	from: '"Navgurukul"<yogesh18@navgurukul.org',
	to: 'ywarathe@gmail.com', // here enter gmail addresh your want send that people	
	subject: 'this is testing',
	text: 'Hi Gyus! I am just checking my code is working or not, mailing you gyus using nodemailer. If you got this mail then reply me that it is working.'
}

transporter.sendMail(HelperOption, (error, info) =>{
	if(error){
		return console.log(error);
	} else {
		console.log("The message was sent ");
		console.log(info);
	}
})

