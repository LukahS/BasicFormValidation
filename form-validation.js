function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLen = userEntered.length;
  var passEntered = document.getElementById("pass").value;

  //Show message that there is an error with the username...
  if(userLen < 6){
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userLen >= 6){
	  document.getElementById("usernameGroup").classList.add("has-success");
  }

  //Show message that there is an error with the password...
  if(passEntered == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(passEntered != "password"){
	  document.getElementById("passwordGroup").classList.add("has-success");
  }
}
