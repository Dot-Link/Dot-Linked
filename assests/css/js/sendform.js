function sendEmail() { 
    var email = document.getElementById('email').value; // Get the email value
    var firstName = document.getElementById('Name').value;
    var lastName = document.getElementById('lastName').value;
    var message = document.getElementById('message').value;
    if (firstName === "" && email === "") {
       
    } else {
        var notsend = document.getElementById('text-send');
        notsend.textContent = 'Your message has been sent to our team.';
        Email.send({ 
            SecureToken: '3b05e8f0-9aa8-4a06-b79f-36fb80c7241a',
            Subject: 'DOT LINK',
            Body: "<br> Name: " + firstName 
            + "<br> LastName: " + lastName
            + "<br> Email Account: " + email
            + "<br> Message: " + message
        }) 
        Email.send({ 
            SecureToken: 'f32f5c7e-9a15-4d0c-8003-1f14a85c8392',
            To: email,
            From: 'dotlinked101@gmail.com',
            Subject: 'DOT LINK',
            Body: //"<br> Name: " + firstName 
            //+ "<br> LastName: " + lastName
            //+ "<br> Email Account: " + email
            "<h1>Thank you For Reaching " + firstName + " " + lastName +
            "<br> Your inquery well be Process Soon......</h1>",
            Attachments : [
                {
                    name : "Dot-Linked.png",
                    path : "https://scontent.xx.fbcdn.net/v/t1.15752-9/398264959_715308147186710_4446229971396612720_n.png?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHSub0fQ1895xiaY8DO_pS4078bgugRywDTvxuC6BHLAJ-Vi0UKpeaWfWdrud3T0xxbdQyQxcKT-g_RNurYC7ep&_nc_ohc=Ld4c60pGoWgAX_AlAuk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQWNqOmFIwT25i54Aby7kLO8McTYHlEQZarPocBJuc8Vw&oe=6580E171"
                }]
        }) 

        // .then(message => {
        //     alert(message);
        //     // Update the text content after the email is sent
        //     // var sentMessage = document.getElementById('text-send');
        //     // sentMessage.textContent = 'Your message has been sent to our team.';
        // });
    }
}