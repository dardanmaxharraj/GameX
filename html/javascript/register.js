function register() {

    var newUsername = document.getElementById('newUsername').value;
    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');

    errorMessage.innerHTML = '';

   
    if (newUsername === '' || email === '' || newPassword === '' || confirmPassword === '') {
      errorMessage.innerHTML = 'All fields are required.';
      return false;
    }

   
    if (newPassword !== confirmPassword) {
      errorMessage.innerHTML = 'Passwords do not match.';
      return false;
    }


    return true;
  }