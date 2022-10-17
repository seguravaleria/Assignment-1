window.onload=init;
  function init(){
    addLastUpdate();
}

function addLastUpdate(){
  const date = new 
Date(document.lastModified);
  
document.getElementById("modified").innerHTML="Last modified: " + date.toDateString();
}



function matchPassword() {
  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");
  if(password1 != password2)
  {
  alert("Passwords do not match");
  }else{
  alert("Passwords created successfully");
  }
}


function validation() {
  let username = document.getElementById("username");
  let listNames = ["Harry", "Elizabeth", "Shana"];

  for (let i =0; i <listNames.length; i++){
    if (listNames[i] === username.value){
      alert("The username already exist")
    }
  }
  return false;
}