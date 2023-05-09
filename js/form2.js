const form = document.querySelector('#signup-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting
  
  // Get form fields
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const comment = form.elements.comment.value;
  
  // TODO: Do something with the form data
  console.log(name, email, comment);
  
  // Reset form fields
  form.reset();
});
