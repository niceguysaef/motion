let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("slideDot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function register(){
    var x=document.getElementById('login');
    var y=document.getElementById('register');
    var z=document.getElementById('liReSlider');
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}

function login(){
    var x=document.getElementById('login');
    var y=document.getElementById('register');
    var z=document.getElementById('liReSlider');
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

function finalLogBtn() {
    var emailField = document.forms['login']['email'];
    var passwordField = document.forms['login']['password'];
    var email = emailField.value;
    var password = passwordField.value;
    var emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = existingUsers.some(user => user.email === email && user.password === password);
    if (email && password) {
        if(email.match(emailFormat)) {
            if (userExists) {
                alert("Login successful!");
            } else {
                alert("User does not exist. Please register a new account!.");
            }
        } else {
            alert("Please enter a valid email.");
        }
    } else {
        alert("Please fill in all the fields.");
    }
    emailField.value = '';
    passwordField.value = '';
}

function finalRegBtn() {
    var firstNameField = document.forms['register']['firstName'];
    var lastNameField = document.forms['register']['lastName'];
    var emailField = document.forms['register']['email'];
    var passwordField = document.forms['register']['password'];
    var confirmPasswordField = document.forms['register']['confirmPassword'];
    var termsCheckbox = document.forms['register']['terms'];
    var firstName = firstNameField.value;
    var lastName = lastNameField.value;
    var email = emailField.value;
    var password = passwordField.value;
    var confirmPassword = confirmPasswordField.value;
    var terms = termsCheckbox.checked;
    var emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = existingUsers.some(user => user.email === email);
    if (firstName && lastName && email && password && confirmPassword && terms) {
        if(email.match(emailFormat)) {
            if (userExists) {
                alert("An account with this email already exists. Please use a different email!.");
            } else {
                existingUsers.push({ firstName, lastName, email, password });
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("Registration successful!");
            }
        } else {
            alert("Please enter a valid email.");
        }
    } else {
        alert("Please complete all the fields and agree to our terms and conditions.");
    }
    firstNameField.value = '';
    lastNameField.value = '';
    emailField.value = '';
    passwordField.value = '';
    confirmPasswordField.value = '';
    termsCheckbox.checked = false;
}

