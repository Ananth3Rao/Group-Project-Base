/* eslint-disable max-len */
/* search bar in header to search by city */
async function dataHandler() {
  const search = document.querySelector('#search');
  const form = document.querySelector('#search-form');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api/hotel');
  const d = await request.json();
  const dat = d.data;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (search.value.length > 0) {
      const filtered = dat.filter((record) => record.city.toLowerCase().includes(search.value.toLowerCase()));
      filtered.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='hotel${item.hotel_id}.html'>${item.hotel_name}</a></div>
          <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
          <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address></div><div class='column'><img src="../Hotels/${item.hotel_id}.png" class="foto"/></div></div></div>`;
        targetList.append(appendItem);
      });
    } else {
      removeElementsByClass("box");
    }
  });
}

/* search bar in header to search by hotel name */
async function dataHandler1() {
  const search = document.querySelector('#search');
  const form = document.querySelector('#search-form');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api/hotel');
  const d = await request.json();
  const dat = d.data;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (search.value.length > 0) {
      const filtered = dat.filter((record) => record.hotel_name.toLowerCase().includes(search.value.toLowerCase()));
      filtered.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='hotel${item.hotel_id}.html'>${item.hotel_name}</a></div>
          <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
          <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address></div><div class='column'><img src="../Hotels/${item.hotel_id}.png" class="foto"/></div></div></div>`;
        targetList.append(appendItem);
      });
    } else {
      removeElementsByClass("box");
    }
  });
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

async function windowActions() {
  await dataHandler();
  await dataHandler1();
}

window.onload = windowActions;
