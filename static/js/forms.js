// Form data using email.js function created with info from course videos
function sendMail(contactForm) {
    emailjs.send("gmail","cocktail-collect-signup",{"from_email": contactForm.email.value,})
        // Response modified from CI course example
        .then(
            function (response) {
                alert("Thanks for your request! We will be in touch shortly!", response);
            },
            function (error) {
                alert("Your email request has failed to send, Please try again!", error);
            }
        );
    return false; // To block from loading a new page
}