const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;

function handleClick(e){
  let inBetween = false;
  lastChecked = this;
  if(e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }
      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick))