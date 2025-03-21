$(document).ready(function() {
    const loginButton = $("#loginbutton");

    $("#username").on("blur", function() {
        const userName = $(this).val();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        loginButton.prop("disabled", !emailPattern.test(userName));
    });

    $("#logincontainer").submit(function(event) {
        event.preventDefault();

        const userName = $("#username").val();
        const password = $("#password").val();

        $.ajax({
            url: "http://localhost:8000/login.php",
            type: "POST",
            data: { username: userName, password: password },
	    contentType: "application/x-www-form-urlencoded",
            success: function(response) {
                const res = typeof response === "string" ? JSON.parse(response) : response;
   		 alert(res.message); 
            }
        });
    });
});
