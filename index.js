// Get the form element
const myForm = document.getElementById('myForm');

// Add an event listener for when the form is submitted
myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Save the form data to localStorage
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);

 
  location.reload();
});


const savedName = localStorage.getItem('name');
const savedEmail = localStorage.getItem('email');
if (savedName && savedEmail) {
  document.getElementById('name').value = savedName;
  document.getElementById('email').value = savedEmail;
}
