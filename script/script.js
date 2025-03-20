document.getElementById("username").addEventListener("input", function() {
	const userName = document.getElementById("username").value;
	const loginButton = document.getElementById("loginbutton");
	
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	

	if(emailPattern.test(userName)){
		loginButton.disabled = false
	} else {
		loginButton.disabled = true
	}
	console.log("Button disabled:", loginButton.disabled); // Debugging
});

document.getElementById("loginbutton").addEventListener("click", function(event) {
    // get input values 
    const userName = document.getElementById("username").value;  
    const password = document.getElementById("password").value; 

   setTimeout(function() {
	if(userName === "hr@auphansoftware.com" && password === "hello"){
		alert("Login Successful");
	} else {
		alert("Incorrect Username/Password");
	}

	console.log("userName: ", userName); 		// Debugging
	console.log("password: ", password);		// Debugging

}, 2000);
    
});