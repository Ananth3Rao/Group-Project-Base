
function mapInit() {
  const mymap = L.map('mapid').setView([20.7984, 156.3319], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3Zlc3RlcmJ5MjIiLCJhIjoiY2ttY3Fvcmg5MXMwbTJ3cDlha3g2ZXh0cSJ9.26HvIeYiNVZpVdmNDt2-vA'
  }).addTo(mymap);
  return mymap;
}
async function dataHandler(mapObjectFromFunction) {
  // const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const form = document.querySelector('#search-form');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api/restaurant');
  const d = await request.json();
  const dat = d.data
  const coords = [];

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (search.value.length > 0) {
      const filtered = dat.filter((record) => record.city.toLowerCase().includes(search.value.toLowerCase())&& record.latitude && record.longitude);
      filtered.forEach((item) => {
        const lat = item.latitude;
        const long = item.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add(search.value.toLowerCase());
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item.restaurant_id}.html'>${item.restaurant_name}</a></div>
        <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
        <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address></div><div class='column'><img src="${item.restaurant_id}.png"/></div></div></div>`;
        targetList.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      targetList.append('');
      removeElementsByClass(search.value.toLowerCase())
    }
  });
}

async function dataHandler26() {
  // const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const form = document.querySelector('#search-form');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api/region');
  const d = await request.json();
  const dat = d.data
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
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item.restaurant_id}.html'>${item.restaurant_name}</a></div>
        <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
        <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address></div><div class='column'><img src="${item.restaurant_id}.png"/></div></div></div>`;
        targetList.append(appendItem);
      });
    } else {
      targetList.append('');
    }
  });
}
/*data handler 11 handles tables that need to be joined*/
async function dataHandler11(mapObjectFromFunction) {
  // const form = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const form = document.querySelector('#search-form');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
console.log(result);

const coords = [];
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log('form submitted');
  if (search.value.length > 0) {
    const filtered = result.filter((record) => record.cuisine_name.toLowerCase().includes(search.value.toLowerCase())&& record.latitude && record.longitude);
    filtered.forEach((item) => {
      const lat = item.latitude;
      const long = item.longitude
      coords.push(lat, long);
      console.log(coords);
      const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
      const appendItem = document.createElement('li');
      appendItem.classList.add('block');
      appendItem.classList.add('list-item');
      appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item.restaurant_id}.html'>${item.restaurant_name}</a></div>
      <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
      <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address></div><div class='column'><img src="${item.restaurant_id}.png"/></div></div></div>`;
      targetList.append(appendItem);
      mapObjectFromFunction.panTo([lat, long]);
    });
  } else {
    targetList.append('');
  }
});
}
// async function dataHandler11() {
//   // const form = document.querySelector('#search-form');
//   const search = document.querySelector('#search');
//   const form = document.querySelector('#search-form');
//   const targetList = document.querySelector('.target-list');

//   const request = await fetch('/api/cuisine');
//   const d = await request.json();
//   const dat = d.data
//   const request2 = await fetch('/api/restaurant');
//   const d2 = await request2.json();
//   const dat2 = d2.data
//   const coords = [];
//   const authormap = {};
//   console.log(dat)

//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     console.log('form submitted');
//     if (search.value.length > 0) {
//       const filtered = dat.filter((record) => record.cuisine_name.toLowerCase().includes(search.value.toLowerCase()));
//       console.log(filtered)
//       filtered.forEach((function(author) {authormap[author.cuisine_id] = author;}));
//       dat2.forEach(function(book) {
//         book.restaurant = authormap[book.restaurant_id];
//         const appendItem = document.createElement('li');
//         appendItem.classList.add('block');
//         appendItem.classList.add('list-item');
//         appendItem.innerHTML = `<div class="list-header is-size-5">${book.restaurant_name}</div><div class="list-header is-size-5">${book.cuisine_id}</div><address class="is-size-6">${book.street_address}</address><address class="is-size-6">${book.city}</address><address class="is-size-6">${book.state}</address><address class="is-size-6">${book.zip_code}</address>`;
//         targetList.append(appendItem);
//     });
//     } else {
//       targetList.append('');
//     }
//     console.log(authormap)
//   });
// }
// const authormap = {};
// dat.forEach(function(author) {authormap[author.restaurant_id] = author;});

// // now do the "join":
// dat2.forEach(function(book) {
//     book.author = authormap[book.cuisine_id];
// });



let show = true;

function showCheckboxes() {
  const checkboxes = document.getElementById("checkBoxes");

  if (show) {
    checkboxes.style.display = "block";
    show = false;
  } else {
    checkboxes.style.display = "none";
    show = true;
  }
}

let show2 = true;

function showCheckboxes2() {
  const checkboxes2 = document.getElementById("checkBoxes2");

  if (show2) {
    checkboxes2.style.display = "block";
    show2 = false;
  } else {
    checkboxes2.style.display = "none";
    show2 = true;
  }
}

let show3 = true;

function showCheckboxes3() {
  const checkboxes3 = document.getElementById("checkBoxes3");

  if (show3) {
    checkboxes3.style.display = "block";
    show3 = false;
  } else {
    checkboxes3.style.display = "none";
    show3 = true;
  }
}

let show4 = true;

function showCheckboxes4() {
  const checkboxes4 = document.getElementById("checkBoxes4");

  if (show4) {
    checkboxes4.style.display = "block";
    show4 = false;
  } else {
    checkboxes4.style.display = "none";
    show4 = true;
  }
}
function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

/* first checkbox for Sub Region CENTRAL  */
async function dataHandler2(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("first");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 3);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("central");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("central");
    }
  });
}
/* second checkbox for Sub Region SOUTH */
async function dataHandler3(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("second");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 2);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("south");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("south");
    }
  });
}
/* third checkbox for Sub Region WEST */
async function dataHandler4(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("third");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 1);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("west");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("west");
    }
  });
}
/* checkboxes for city */
/* first checkbox CITY KAHULUI */
async function dataHandler5(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("fourth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === 'Kahului');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("kahului");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("kahului")
    }
  });
}

/* second checkbox CITY KAPALUA */
async function dataHandler6(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("fifth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === 'Kapalua');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("kapalua");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("kapalua")
    }
  });
}
/* third checkbox CITY KIHEI */
async function dataHandler7(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("sixth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === 'Kihei');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("kihei");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("kihei")
    }
  });
}
/* fourth checkbox CITY LAHAINA */
async function dataHandler8(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("seventh");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === 'Lahaina');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("lahaina");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("lahaina")
    }
  });
}
/* fifth checkbox CITY PAIA */
async function dataHandler9(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("eighth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === 'Paia');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("paia");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("paia")
    }
  });
}

/* sixth checkbox CITY WAILEA */
async function dataHandler10(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("ninth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cities");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === 'Wailea');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.classList.add("wailea");
        appendItem.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href='${item1.restaurant_id}.html'>${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem);
        mapObjectFromFunction.panTo([lat, long]);
      });
    }else {
      removeElementsByClass("wailea")
    }
  });
}

async function dataHandler12(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 1);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("american");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("american");
    }
  });
}
async function dataHandler13(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("thirteenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 2);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("chinese");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("chinese");
    }
  });
}
async function dataHandler14(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("nineteenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 3);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("italian");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("italian");
    }
  });
}

async function dataHandler15(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("fourteenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 5);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("turkish");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("turkish");
    }
  });
}
async function dataHandler16(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("twentieth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 6);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("seafood");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("seafood");
    }
  });
}
async function dataHandler17(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("eighteenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 7);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("hawaiian");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("hawaiian");
    }
  });
}
async function dataHandler18(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tfirst");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 8);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("filipino");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("filipino");
    }
  });
}
async function dataHandler19(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tsecond");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords =[];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 9);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("mexican");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("mexican");
    }
  });
}
async function dataHandler20(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("fifteenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 10);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("japanese");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("japanese");
    }
  });
}
async function dataHandler21(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("seventeenth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 11);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("thai");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("thai");
    }
  });
}
async function dataHandler22(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tthird");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 12);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("caribbean");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("caribbean");
    }
  });
}
async function dataHandler23(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("twelth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 13);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("indian");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("indian");
    }
  });
}
async function dataHandler24(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tfourth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords =[];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 14);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("vietnamnese");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("vietnamnese");
    }
  });
}
async function dataHandler25(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("eleventh");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cuisine");

  const request = await fetch('/api/cuisine');
  const d = await request.json();
  const dat = d.data
  const request2 = await fetch('/api/restaurant');
  const d2 = await request2.json();
  const dat2 = d2.data
  console.log(dat)
  
  const createObjectLookup = function( arr, key ){
    let i, l, obj, ret = {};
    for ( i=0, l=arr.length; i<l; i++ ) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };
  
  const up = createObjectLookup(dat, 'cuisine_id');
  console.log(up)
  let i, l, question, user, result = [];
for ( i=0, l=dat2.length; i<l; i++ ) {
  if ( (question = dat2[i]) && (user = up[question.cuisine_id]) ) {
    result.push({
      cuisine_id: question.cuisine_id,
      restaurant_name: question.restaurant_name,
      cuisine_name: user.cuisine_name,
      street_address: question.street_address,
      city: question.city,
      state: question.state,
      zip_code: question.zip_code,
      restaurant_id: question.restaurant_id,
      latitude: question.latitude,
      longitude: question.longitude

    });
  }
}
const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.cuisine_id === 15);
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("mediterranean");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("mediterranean");
    }
  });
}

async function dataHandler27(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tsixth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#price");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.price_range === '$$');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("$$");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("$$");
    }
  });
}
async function dataHandler28(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("tseventh");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#price");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.price_range === '$$$');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("$$$");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("$$$");
    }
  });
}
async function dataHandler29(mapObjectFromFunction) {
  const checkBox1 = document.getElementById("teighth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#price");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const coords = [];
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.price_range === '$$$$');
      filtered1.forEach((item1) => {
        const lat = item1.latitude;
        const long = item1.longitude
        coords.push(lat, long);
        console.log(coords);
        const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("$$$$");
        appendItem1.innerHTML = `<div class='box'><div class='columns'><div class='column'><div class="list-header is-size-5"><a href="${item1.restaurant_id}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div><div class='column'><img src="${item1.restaurant_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
        mapObjectFromFunction.panTo([lat, long]);
      });
    } else {
      removeElementsByClass("$$$$");
    }
  });
}
async function windowActions(){
  const map = mapInit();
  await dataHandler(map);
  await dataHandler2(map);
  await dataHandler3(map);
  await dataHandler4(map);
  await dataHandler5(map);
  await dataHandler6(map);
  await dataHandler7(map);
  await dataHandler8(map);
  await dataHandler9(map);
  await dataHandler10(map);
  await dataHandler11(map);
  await dataHandler12(map);
  await dataHandler13(map);
  await dataHandler14(map);
  await dataHandler15(map);
  await dataHandler16(map);
  await dataHandler17(map);
  await dataHandler18(map);
  await dataHandler19(map);
  await dataHandler20(map);
  await dataHandler21(map);
  await dataHandler22(map);
  await dataHandler23(map);
  await dataHandler24(map);
  await dataHandler25(map);
  await dataHandler26(map);
  await dataHandler27(map);
  await dataHandler28(map);
  await dataHandler29(map);
}
window.onload = windowActions;