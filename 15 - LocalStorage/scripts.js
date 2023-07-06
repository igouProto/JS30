// animate wrapper in
const wrapper = document.querySelector('.wrapper');
wrapper.classList.remove('hidden');

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
//const items = [];
const items = JSON.parse(localStorage.getItem('items')) || [];

const addItem = (e) => {
    e.preventDefault(); // prevents page from reloading
    const text = (e.target.querySelector('[name="item"]')).value;

    // make a new entry object
    const item = {
        text: text,
        done: false
    };

    items.push(item);
    // console.table(items);
    localStorage.setItem('items', JSON.stringify(items));

    appendToList(item, itemsList);

    e.target.reset(); // clears the form
}

const loadList = (items = [], itemsList) => { // add any list to any html element
    
    itemsList.innerHTML = items.map((item, idx) => {
        return `
            <li class='show'>
                <input type="checkbox" data-index=${idx} id="item${idx}" ${item.done ? 'checked' : ''} />
                <label for="item${idx}">${item.text}</label>
            </li>
        `
    }).join(''); // map over the items array
    // but we are recreating the entire list every time
    // so frameworks like react  are better for this
    // since they have a way to only update the changed elements
}

const appendToList = (item, itemsList) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" data-index=${items.length - 1} id="item${items.length - 1}" ${item.done ? 'checked' : ''} />
        <label for="item${items.length - 1}">${item.text}</label>
    `;
    itemsList.appendChild(li);

    setTimeout(() => {
        li.classList.add('show');
    }, 10);
}

const toggleDone = (e) => {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    // console.log(e.target);

    const elt = e.target;
    const idx = elt.dataset.index;
    items[idx].done = !items[idx].done;

    // update localstorage
    localStorage.setItem('items', JSON.stringify(items));
};


// listeners
addItems.addEventListener('submit', addItem);

// listen for clicks on the list itself
itemsList.addEventListener('click', toggleDone);

// the localstorage clear link
const clearLink = document.querySelector('.clear');
clearLink.addEventListener('click', () => {
    // clear localstorage
    localStorage.clear();
    // clear the list
    itemsList.innerHTML = '';
});


// add items to page on load
loadList(items, itemsList);