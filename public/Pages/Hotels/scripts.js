/* JS for the check box inside the selector */
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
let show5 = true;

function showCheckboxes5() {
  const checkboxes5 = document.getElementById("checkBoxes5");

  if (show5) {
    checkboxes5.style.display = "block";
    show5 = false;
  } else {
    checkboxes5.style.display = "none";
    show5 = true;
  }
}
let show6 = true;

function showCheckboxes6() {
  const checkboxes6 = document.getElementById("checkBoxes6");

  if (show6) {
    checkboxes6.style.display = "block";
    show6 = false;
  } else {
    checkboxes6.style.display = "none";
    show6 = true;
  }
}
/* search bar in header */
async function dataHandler() {
  // const form = document.querySelector('#search-form');
  const search = document.querySelector("#search");
  const form = document.querySelector("#search-form");
  const targetList = document.querySelector(".target-list");

  const request = await fetch("/api/hotel");
  const d = await request.json();
  const dat = d.data;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("form submitted");
    if (search.value.length > 0) {
      const filtered = dat.filter((record) =>
        record.city.toLowerCase().includes(search.value.toLowerCase())
      );
      filtered.forEach((item) => {
        const appendItem = document.createElement("li");
        appendItem.classList.add("block");
        appendItem.classList.add("list-item");
        appendItem.innerHTML = `<h1 class="resultheader"> Results </h1> <div class="list-header is-size-5">${item.hotel_name}</div>
        <address class="is-size-6">${item.street_address}</address><address class="is-size-6">${item.city}</address>
        <address class="is-size-6">${item.state}</address><address class="is-size-6">${item.zip_code}</address>`;
        targetList.append(appendItem);
      });
    } else {
      targetList.append("");
    }
  });
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
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

  const request1 = await fetch("/api/hotel");
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
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("wailea")
    }
  });
}

/*checkboxes for hotel type */
/*first checkbox for Villas */ 
async function dataHandler11() {
  const checkBox1 = document.getElementById("thirty");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 1);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("villas");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("villas")
    }
  });
}


/* First checkbox Hotel Type Villas */
async function dataHandler11() {
  const checkBox1 = document.getElementById("thirty");
  const targetList1 = document.querySelector(".target-list");
 // const form1 = document.querySelector("#Hotel Type");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 1);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("villas");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    }else {
      removeElementsByClass("villas")
    }
  });
}



/* Second checkbox Hotel Type Tranditional Hotel */
/*async function dataHandler12() {
  const checkBox1 = document.getElementById("thrityfirst");
  const targetList1 = document.querySelector(".target-list");
  //const form1 = document.querySelector("#Hotel Type");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 2);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("traditional");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("traditional")
    }
  });
}*/

/*second checkbox for Traditional Hotel */ 
async function dataHandler12() {
  const checkBox1 = document.getElementById("thirtyfirst");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 2);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("traditional");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("traditional")
    }
  });
}
/* Third checkbox Hotel Type Resort */
async function dataHandler13() {
  const checkBox1 = document.getElementById("thirtysecond");
  const targetList1 = document.querySelector(".target-list");
  //const form1 = document.querySelector("#Hotel Type");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === "3");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("Resorts");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    } else{
      removeElementsByClass("Resorts")
    }
  });
}

/* Fourth checkbox Hotel Type Cottage */
async function dataHandler14() {
  const checkBox1 = document.getElementById("thirtythird");
  const targetList1 = document.querySelector(".target-list");
 // const form1 = document.querySelector("#Hotel Type");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === "4");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    }
  });
}

/* Fifth checkbox Hotel Type Condos */
async function dataHandler15() {
  const checkBox1 = document.getElementById("thirtyfourth");
  const targetList1 = document.querySelector(".target-list");
  //const form1 = document.querySelector("#Hotel Type");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === "5");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
    }
  });
}

/* Six checkbox Hotel Type Inn */
async function dataHandler16() {
  const checkBox1 = document.getElementById("thirtyfifth");
  const targetList1 = document.querySelector(".target-list");
  //const form1 = document.querySelector("#Hotel Type");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === "6");
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.innerHTML = `<div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address>`;
        targetList1.append(appendItem1);
      });
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
<<<<<<< HEAD
  await dataHandler12();
  await dataHandler13();
  await dataHandler14();
  await dataHandler15();
  await dataHandler16();
=======
>>>>>>> 7c98e7f9b1423ed25672ed2d4980b22ef9d75a80
}


window.onload = windowActions;
