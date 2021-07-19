
    
 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const fullname = document.getElementById('fullname');
 const email = document.getElementById('email');
 const password = document.getElementById('password');

 form.addEventListener('submit', e => {
 	e.preventDefault();

 	checkInputs();
 })
 function checkInputs() {


 	if(usernameValue === '') {
 		setErrorFor(username, 'Username cannot be blank');
 	} else {
 		setSuccessFor(username);
 	}
 	if(passwordValue === '') {
 		setErrorFor(password, 'Password cannot be blank');
 	} else {
 		setSuccessFor(password);

 	}
