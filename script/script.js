$(document).ready(function() {
	$("#username").on("blur",function() {
		const userName = $("#username").val();
		const loginButton = $("#loginbutton");
		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

		if(emailPattern.test(userName)) {
			$("#loginbutton").prop("disabled", false);
		} else {
			$("#loginbutton").prop("disabled", true);
		}
});	
});


$(document).ready(function(){
	$("#loginbutton").click(function(){
	const userName = $("#username").val();
	const password = $("#password").val();
	
	setTimeout(function(){
		if(userName === "hr@auphansoftware.com" && password === "hello"){
			alert("Login Successful");
		} else {
			alert("Incorrect Username/Password");
		}
}, 2000);
});
});