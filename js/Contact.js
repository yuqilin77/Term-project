// After DOM elements loaded,and start the function
document.addEventListener("DOMContentLoaded", function(){

  // define the function occurs after the users click submit button 
  document.getElementById("myForm").addEventListener("submit", function(e) {

    // prevent the submit event happens
    e.preventDefault();  
    
    // extract the first name, last name, email and phone number entered by the users
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    // define the Regex of the name, email and phone number for valid entry
    const nameRex = /^[A-Za-z]{2,}$/;
    const emailRex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    const phoneRex = /^\d{10}$/;
  
    // test if the first name, last name, email address and phone numbers agrees to the Regex
    if (!nameRex.test(firstName)) {
      showError("First name must be at least two characters and only alpha characters are used");
      return;
    }
    if (!nameRex.test(lastName)) {
      showError("Last name must be at least two characters and only alpha characters are used");
      return;
    }
    if (!emailRex.test(email)) {
      showError("Invalid email address");
      return;
    }

    if (!phoneRex.test(number)) {
      showError("Cell phone number must be an 10-digit number");
      return;
    }
    
    //submit the form if the checks above passed
    this.submit();
  });

  //add a function to show error message which shows in the div section in HTML
  function showError(message) {
    var errorContainer = document.getElementById("errorMessageContainer");
    var errorElement = document.createElement("p");
    errorElement.classList.add("errorMessage");
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
  }  
});