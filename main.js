function validateEmail() {
        var email = document.getElementById('inputEmail').innerHTML;
        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
        if (email.value == "") {
            alert( "  Please enter your Email or Phone Number  ");
            console.log("yoo");
        }
        else if (!mailFormat.test(email.value)) {
            alert( "  Email Address / Phone number is not valid, Please provide a valid Email or phone number ");
            console.log("yoo1")
            return false;
        }
        else {
            alert(" Success ");
        }
}
