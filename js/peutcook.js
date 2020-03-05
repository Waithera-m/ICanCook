// submit button function
function validateTheForm() {
    var Email= document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    var Name = document.getElementById("Name").value;
    if (Email == "") {
      alert("please fill in your Email");
      return false;
    } 
    else if (Password == "") {
      alert("Please fill in your Password");
      return false;
    }
     else {
      alert(
        Name+", we have received your message. Thank you for reaching out to us."
      );
    }
    event.preventDefault();
  }
  function validateTheForm2() {
    var Email= document.getElementById("Emailo").value;
    var Password = document.getElementById("Passwordo").value;
    if (Email == "") {
      alert("please fill in your Email");
      return false;
    } 
    else if (Password == "") {
      alert("Please fill in your Password");
      return false;
    }
     else {
      swal (
         "Welcome back"
      );
    }
    event.preventDefault();
  }

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});




































