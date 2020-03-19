var PasswordValidator = document.getElementById('PasswordValidator');
var PasswordOne = document.getElementById('Pass');
var PasswordTwo = document.getElementById('ConPass');
PasswordValidator.addEventListener("click", function() {
	console.log("check");
	if(PasswordOne.value.length > 7){
		if(PasswordOne.value == PasswordTwo.value){
			alert("The password is valid!");
		}else{
			alert("The passwords do not match.");
		}
	}else{
		alert("Input a password with more than 7 charecters.");
	}
});