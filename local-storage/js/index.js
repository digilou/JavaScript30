const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text: text, //ES6 would be just text
    done: false
  }
  items.push(item);
  popList(items,itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function popList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? checked : ''} />
      <li><label for="item${i}">${plate.text}</label></li>
    `;
  }).join(''); // join takes array and turns into one string
}

function toggleDone(e){
  if(!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target; // variable for targeted element
  const index = e.dataset.index; // each data-set #
  items[index].done = !items[index].done; // change property
  localStorage.setItem('items', JSON.stringify(items)); // store in local storage
  popList(items, itemsList); // visual update
}

addItems.addEventListener('submit', addItem);
itemsList.addEvenListener('click', toggleDone);

popList(items, itemsList);