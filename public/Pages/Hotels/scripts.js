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
  const { hash } = location;
  const checkBox1 = document.getElementById("first");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  if (hash === "#central") {
    checkBox1.checked = true;
    const filtered1 = dat1.filter((record1) => record1.sub_region_id === 3);
    filtered1.forEach((item1) => {
      const appendItem1 = document.createElement("li");
      appendItem1.classList.add("block");
      appendItem1.classList.add("list-item");
      appendItem1.classList.add("central");
      appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
      targetList1.append(appendItem1);
    });
  }
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 3);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("central");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("central");
    }
  });
}
/* second checkbox for Sub Region SOUTH */
async function dataHandler3() {
  const { hash } = location;
  const checkBox1 = document.getElementById("second");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  if (hash === "#south") {
    checkBox1.checked = true;
    const filtered1 = dat1.filter((record1) => record1.sub_region_id === 2);
    filtered1.forEach((item1) => {
      const appendItem1 = document.createElement("li");
      appendItem1.classList.add("block");
      appendItem1.classList.add("list-item");
      appendItem1.classList.add("south");
      appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
      targetList1.append(appendItem1);
    });
  }
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 2);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("south");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("south");
    }
  });
}
/* third checkbox for Sub Region WEST */
async function dataHandler4() {
  const {hash} = location;
  const checkBox1 = document.getElementById("third");
  const targetList1 = document.querySelector(".target-list");
  const form1 = document.querySelector("#SubR");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  if (hash === "#west") {
    checkBox1.checked = true;
    const filtered1 = dat1.filter((record1) => record1.sub_region_id === 1);
    filtered1.forEach((item1) => {
      const appendItem1 = document.createElement("li");
      appendItem1.classList.add("block");
      appendItem1.classList.add("list-item");
      appendItem1.classList.add("west");
      appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
      targetList1.append(appendItem1);
    });
  }
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.sub_region_id === 1);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("west");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("kahului");
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("kapalua");
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("kihei");
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("lahaina");
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("paia");
    }
  });
}

/* sixth checkbox CITY WAILEA */
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("wailea");
    }
  });
}

/*checkboxes for hotel type */
/* First checkbox Hotel Type Villas */
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("villas");
    }
  });
}
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
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("traditional");
    }
  });
}
/* Third checkbox Hotel Type Resort */
async function dataHandler13() {
  const checkBox1 = document.getElementById("thirtysecond");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 3);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("resorts");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("resorts");
    }
  });
}

/* Fourth checkbox Hotel Type Cottage */
async function dataHandler14() {
  const checkBox1 = document.getElementById("thirtythird");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 4);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("cottages");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("cottages");
    }
  });
}

/* Fifth checkbox Hotel Type Condos */
async function dataHandler15() {
  const checkBox1 = document.getElementById("thirtyfourth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 5);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("condoss");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("condoss");
    }
  });
}

/* Six checkbox Hotel Type Inn */
async function dataHandler16() {
  const checkBox1 = document.getElementById("thirtyfifth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter((record1) => record1.hotel_type_id === 6);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("Inns");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("Inns");
    }
  });
}

/*checkbox for Room view these checkboxes
will need a join between tables Hotel Overview and 
Room */
/* first checkbox Partial Ocean */
async function dataHandler17() {
  const checkBox1 = document.getElementById("thirtysixth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 1);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("partial");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("partial");
    }
  });
}

/* second checkbox Room View Ocean Front */
async function dataHandler18() {
  const checkBox1 = document.getElementById("thirtyseventh");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 2);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("ocean");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("ocean");
    }
  });
}

/* Third checkbox Room View Parking Lot */
async function dataHandler19() {
  const checkBox1 = document.getElementById("thirtyeighth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 3);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("parking");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("parking");
    }
  });
}

/* Fourth checkbox Room View Resort */
async function dataHandler20() {
  const checkBox1 = document.getElementById("thirtyninth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 4);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("resort");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("resort");
    }
  });
}

/* Fifth checkbox Room View Mountain */
async function dataHandler21() {
  const checkBox1 = document.getElementById("forty");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 5);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("mountain");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("mountain");
    }
  });
}

/* Sixth checkbox Room View Garden */
async function dataHandler22() {
  const checkBox1 = document.getElementById("ffirst");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 6);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("garden");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("garden");
    }
  });
}

/* seventh checkbox Room View Parks */
async function dataHandler23() {
  const checkBox1 = document.getElementById("fsecond");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 7);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("park");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("park");
    }
  });
}

/* eighth checkbox Room View Not Specified */
async function dataHandler24() {
  const checkBox1 = document.getElementById("fthird");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 8);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("specified");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("specified");
    }
  });
}

/* Ninth checkbox Room View Town */
async function dataHandler25() {
  const checkBox1 = document.getElementById("ffourth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  const request2 = await fetch("/api/room");
  const d2 = await request2.json();
  const dat2 = d2.data;
  console.log(dat1);
  console.log(dat2);

  const createObjectLookup = function (arr, key) {
    let i,
      l,
      obj,
      ret = {};
    for (i = 0, l = arr.length; i < l; i++) {
      obj = arr[i];
      ret[obj[key]] = obj;
    }
    return ret;
  };

  const up = createObjectLookup(dat1, "hotel_id");
  console.log(up);
  let i,
    l,
    question,
    user,
    result = [];
  for (i = 0, l = dat2.length; i < l; i++) {
    if ((question = dat2[i]) && (user = up[question.hotel_id])) {
      result.push({
        hotel_id: question.hotel_id,
        room_view_id: question.room_view_id,
        hotel_name: user.hotel_name,
        street_address: user.street_address,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
      });
    }
  }
  console.log(result);

  checkBox1.addEventListener("change", async (event) => {
    event.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = result.filter((record1) => record1.room_view_id === 9);
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("town");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("town");
    }
  });
}
/*checkboxes for Hotel Ratings*/
/*third checkbox for rating higher than 3 but lower than 4 */
async function dataHandler26() {
  const checkBox1 = document.getElementById("fseventh");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter(
        (record1) => record1.hotel_rating < 4 && record1.hotel_rating > 3
      );
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("3star");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("3star");
    }
  });
}

/*fourth checkbox for rating higher than 4 but lower than 5 */
async function dataHandler27() {
  const checkBox1 = document.getElementById("feighth");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter(
        (record1) => record1.hotel_rating < 5 && record1.hotel_rating > 4
      );
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("4star");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("4star");
    }
  });
}

/*fifth checkbox for rating higher than 4 but lower than 5 */
async function dataHandler28() {
  const checkBox1 = document.getElementById("fnine");
  const targetList1 = document.querySelector(".target-list");

  const request1 = await fetch("/api/hotel");
  const d1 = await request1.json();
  const dat1 = d1.data;
  checkBox1.addEventListener("change", async (event1) => {
    event1.preventDefault();
    if (checkBox1.checked) {
      const filtered1 = dat1.filter(
        (record1) => record1.hotel_rating >= 5
      ); /*had to use >=, would not work with triple === */
      filtered1.forEach((item1) => {
        const appendItem1 = document.createElement("li");
        appendItem1.classList.add("block");
        appendItem1.classList.add("list-item");
        appendItem1.classList.add("5star");
        appendItem1.innerHTML = `<div class="box"><div class="columns"><div class="column"><div class="list-header is-size-5"><a href="hotel${item1.hotel_id}.html">${item1.hotel_name}</a></div>
        <address class="is-size-6">${item1.street_address}</address><address class="is-size-6">${item1.city}</address>
        <address class="is-size-6">${item1.state}</address><address class="is-size-6">${item1.zip_code}</address></div>
        <div class='column'><img src="${item1.hotel_id}.png"/></div></div></div>`;
        targetList1.append(appendItem1);
      });
    } else {
      removeElementsByClass("5star");
    }
  });
}

async function windowActions() {
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
  await dataHandler12();
  await dataHandler13();
  await dataHandler14();
  await dataHandler15();
  await dataHandler16();
  await dataHandler17();
  await dataHandler18();/*removed dataHandler19 no need for it anymore */
  await dataHandler20();
  await dataHandler21();
  await dataHandler22();
  await dataHandler23();
  await dataHandler24();
  await dataHandler25();
  await dataHandler26();
  await dataHandler27();
  await dataHandler28();
}

window.onload = windowActions;
