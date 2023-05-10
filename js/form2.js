const form = document.querySelector('#signup-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const comment = form.elements.comment.value;
  

  console.log(name, email, comment);
  

  form.reset();
});
