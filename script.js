
//function that helps password and retype password are equal on page 3

function validationForm(){
  return validationPassword() && validationUser();
}

//Validation function for form on page 3
//valids that password and confirm password are equal
//for registration form on page 3
function validationPassword() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  if(password1 !== password2){
  alert("Passwords do not match");
    return false;
  } else {
    return true;
  }
}

//validation function for form on page 3
//function for validation of the username
function validationUser(){
  var users =["Harry","Elizabeth","Shana"];
  var uname = document.forms["regForm"]["username"].value;
  if (users.includes(uname)){
    alert("Username is not avaliable");
    return false;
  } else{
    return true;
  }
}


//This is the code to validate the canvas code on page 1 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
///Set up for first text of my canva in page 2
ctx.fillStyle ="purple";
ctx.font = "30px Arial";
ctx.fillText("Hello Everyone",10,100);

//Set up for my second text of my canva in page 2 
ctx.font = "Bold 30px Sans-Serif";
ctx.strokeText("This is my Canva",40,50);

