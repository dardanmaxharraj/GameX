document.getElementById("loginButton").addEventListener("click", function() {
    login();
  });
  
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can add your authentication logic here
    // For simplicity, let's check if both fields are non-empty
    if (username == "dardan" && password == "1234") {
      alert("Login successful!");
      window.location.href = 'home.html';
    }  
    else if(username ==='' || password ==='') {
            alert('Username and password are required.');
            return false;
    }
    else if(username !== "dardan" || password !== "1234"){
      alert("Wrong credentials");
    }
  }