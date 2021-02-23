function sendEmail(){
	Email.send({
		Host: "smtp.gmail.com",
		Username: "vitalgrouping@gmail.com"
		Password: "vitalgrouping=9"
		To : '',
		From : "Vital Grouping",
		Subject : "Info",
		Body : "",		
		}).than(
			console.log("email sent successfully")

		);
}

var email = document.getElementById('email').value;
var message = document.getElementById('message').value;