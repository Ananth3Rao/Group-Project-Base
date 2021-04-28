/* JS for the check box inside the selector */
let show = true;

function showCheckboxes() {
  const checkboxes = document.getElementById('checkBoxes');

  if (show) {
    checkboxes.style.display = 'block';
    show = false;
  } else {
    checkboxes.style.display = 'none';
    show = true;
  }
}

let show2 = true;

function showCheckboxes2() {
  const checkboxes2 = document.getElementById('checkBoxes2');

  if (show2) {
    checkboxes2.style.display = 'block';
    show2 = false;
  } else {
    checkboxes2.style.display = 'none';
    show2 = true;
  }
}

let show3 = true;

function showCheckboxes3() {
  const checkboxes3 = document.getElementById('checkBoxes3');

  if (show3) {
    checkboxes3.style.display = 'block';
    show3 = false;
  } else {
    checkboxes3.style.display = 'none';
    show3 = true;
  }
}

let show4 = true;

function showCheckboxes4() {
  const checkboxes4 = document.getElementById('checkBoxes4');

  if (show4) {
    checkboxes4.style.display = 'block';
    show4 = false;
  } else {
    checkboxes4.style.display = 'none';
    show4 = true;
  }
}
let show5 = true;

function showCheckboxes5() {
  const checkboxes5 = document.getElementById('checkBoxes5');

  if (show5) {
    checkboxes5.style.display = 'block';
    show5 = false;
  } else {
    checkboxes5.style.display = 'none';
    show5 = true;
  }
}
let show6 = true;

function showCheckboxes6() {
  const checkboxes6 = document.getElementById('checkBoxes6');

  if (show6) {
    checkboxes6.style.display = 'block';
    show6 = false;
  } else {
    checkboxes6.style.display = 'none';
    show6 = true;
  }
}
/* search bar in header */
async function dataHandler() {
  // const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const form = document.querySelector('#search-form');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api/restaurant');
  const d = await request.json();
  const dat = d.data;
  const coords = [];

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (search.value.length > 0) {
      const filtered = dat.filter((record) => record.city.toLowerCase().includes(search.value.toLowerCase()));
      filtered.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<h1 class="resultheader"> Results </h1> <div class="list-header is-size-5">${item.restaurant_name}</div>
        <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
        <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address>`;
        targetList.append(appendItem);
      });
    } else {
      targetList.append('');
    }
  });
}
/* first checkbox for Sub Region  */
async function dataHandler2() {
  const checkBox1 = document.getElementById('first');
  const targetList1 = document.querySelector('.target-list');
  const form1 = document.querySelector('#SubR')

  const request = await fetch('/api/hotel');
  const d = await request.json();
  const dat = d.data;
  form1.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      dat.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<h1 class="resultheader"> Results </h1> <div class="list-header is-size-5">${item.hotel_name}</div>
        <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
        <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address>`;
        targetList1.append(appendItem);
    });
  }
  })
}
async function windowActions() {
  await dataHandler();
  await dataHandler2();
}

window.onload = windowActions;