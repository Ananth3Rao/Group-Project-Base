
async function dataHandler() {
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
      const filtered = dat.filter((record) => record.city.toLowerCase().includes(search.value.toLowerCase()));
      filtered.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<div class="list-header is-size-5">${item.restaurant_name}</div><address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address><address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address>`;
        targetList.append(appendItem);
      });
    } else {
      targetList.append('');
    }
  });
}

/*data handler 11 handles tables that need to be joined*/
async function dataHandler11() {
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
      zip_code: question.zip_code

    });
  }
}
console.log(result);


  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (search.value.length > 0) {
      const filtered = result.filter((record) => record.cuisine_name.toLowerCase().includes(search.value.toLowerCase()));
      filtered.forEach((item) => {
        const appendItem = document.createElement('li');
        appendItem.classList.add('block');
        appendItem.classList.add('list-item');
        appendItem.innerHTML = `<div class="list-header is-size-5">${item.restaurant_name}</div><div class="list-header is-size-5">${item.cuisine_name}</div><address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address><address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address>`;
        targetList.append(appendItem);
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
async function dataHandler2() {
  const checkBox1 = document.getElementById("first");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 3);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("central");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("central");
    }
  });
}
/* second checkbox for Sub Region SOUTH */
async function dataHandler3() {
  const checkBox1 = document.getElementById("second");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 2);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("south");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("south");
    }
  });
}
/* third checkbox for Sub Region WEST */
async function dataHandler4() {
  const checkBox1 = document.getElementById("third");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 1);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("west");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("west");
    }
  });
}
/* checkboxes for city */
/* first checkbox CITY KAHULUI */
async function dataHandler5() {
  const checkBox1 = document.getElementById("fourth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Kahului");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("kahului");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("kahului")
    }
  });
}

/* second checkbox CITY KAPALUA */
async function dataHandler6() {
  const checkBox1 = document.getElementById("fifth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Kapalua");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("kapalua");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("kapalua")
    }
  });
}
/* third checkbox CITY KIHEI */
async function dataHandler7() {
  const checkBox1 = document.getElementById("sixth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Kihei");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("kihei");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("kihei")
    }
  });
}
/* fourth checkbox CITY LAHAINA */
async function dataHandler8() {
  const checkBox1 = document.getElementById("seventh");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Lahaina");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("lahaina");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("lahaina")
    }
  });
}
/* fifth checkbox CITY PAIA */
async function dataHandler9() {
  const checkBox1 = document.getElementById("eighth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Paia");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("paia");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("paia")
    }
  });
}

/* sixth checkbox CITY WAILEA */
async function dataHandler10() {
  const checkBox1 = document.getElementById("ninth");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#Cities");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  form1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Wailea");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    }
  });
}
async function dataHandler10() {
  const checkBox1 = document.getElementById("ninth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/restaurant");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.city === "Wailea");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("wailea");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.restaurant_name}.html">${item1.restaurant_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("wailea")
    }
  });
}

async function windowActions(){
  await dataHandler();
  await dataHandler2();
  await dataHandler3();
  await dataHandler4();
  await dataHandler5();
  await dataHandler6();
  await dataHandler7();
  await dataHandler8();
  await dataHandler9();
  await dataHandler10();
  await dataHandler11();
}
window.onload = windowActions;