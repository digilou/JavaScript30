// select all inputs on the page
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  // get data-sizing
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));