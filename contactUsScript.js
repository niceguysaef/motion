document.addEventListener('DOMContentLoaded', function() {
  var inputFields = document.querySelectorAll('.customerInput input, .customerInput textarea');
  
  inputFields.forEach(function(inputField) {
    inputField.addEventListener('input', function() {
      if (this.value.trim() !== '') {
        this.nextElementSibling.style.display = 'none';
      } else {
        this.nextElementSibling.style.display = 'inline-block';
      }
    });
  });

  var form = document.getElementById('contactUsForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get right back to you.');
    form.reset();
    inputFields.forEach(function(inputField) {
      inputField.nextElementSibling.style.display = 'inline-block';
    });
  });
});
