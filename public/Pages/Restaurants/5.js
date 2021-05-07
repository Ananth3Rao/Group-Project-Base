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
    const request = await fetch('/api/cuisine');
    const d = await request.json();
    const dat = d.data;
    const request2 = await fetch('/api/restaurant');
    const d2 = await request2.json();
    const dat2 = d2.data;
    const targetList1 = document.querySelector('.target-list');
    const targetList2 = document.querySelector('.target-list1');
  
    const createObjectLookup = function(arr, key) {
      let i; let l; let obj; const
        ret = {};
      for (i = 0, l = arr.length; i < l; i++) {
        obj = arr[i];
        ret[obj[key]] = obj;
      }
      return ret;
    };
  
    const up = createObjectLookup(dat, 'cuisine_id');
    let i; let l; let question; let user; const
      result = [];
    for (i = 0, l = dat2.length; i < l; i++) {
      if ((question = dat2[i]) && (user = up[question.cuisine_id])) {
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
          longitude: question.longitude,
          rating: question.rating,
          price: question.price_range,
          phone_number: question.phone_number,
          open_time: question.open_time,
          close_time: question.close_time
  
        });
      }
    }
    const x = result[4];
    console.log(x)
    const appendItem = document.createElement('div');
    appendItem.classList.add = 'con';
    const appendItem2 = document.createElement('div');
    appendItem2.classList.add = 'con';
    if (x.rating > 4 && x.rating <= 5) {
    appendItem.innerHTML = `<h3 class="title is-3">${x.restaurant_name}</h3>
    <h5 class='title is-5'>${x.price} ${x.cuisine_name} 
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span></h5>
    <div class="image"><img src="${x.restaurant_id}.png"/></div>
    `;
    appendItem2.innerHTML = `<div class='columns'><div class='column'><span class='addy'><div class=addy2>Address</div>
    ${x.street_address}, ${x.city} ${x.state}, ${x.zip_code}</span>
    <hr>
    <span class='addy'><div class=addy2><p>Phone Number</p></div>
    ${x.phone_number}</span>
    <hr>
    <span class='addy'><div class=addy2>Hours</div>
    ${x.open_time} - ${x.close_time}</span></div>
    </div>`};
    if (x.rating > 3 && x.rating <= 4) {
      appendItem.innerHTML = `<h3 class="title is-3">${x.restaurant_name}</h3>
    <h5 class='title is-5'>${x.price} ${x.cuisine_name} 
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star "></span></h5>
    <div class="image"><img src="${x.restaurant_id}.png"/></div>
    `;
    appendItem2.innerHTML = `<div class='columns'><div class='column'><span class='addy'><div class=addy2>Address</div>
    ${x.street_address}, ${x.city} ${x.state}, ${x.zip_code}</span>
    <hr>
    <span class='addy'><div class=addy2><p>Phone Number</p></div>
    ${x.phone_number}</span>
    <hr>
    <span class='addy'><div class=addy2>Hours</div>
    ${x.open_time} - ${x.close_time}</span></div>
    </div>`;};
      if (x.rating > 2 && x.rating <= 3) {
        appendItem.innerHTML = `<h3 class="title is-3">${x.restaurant_name}</h3>
    <h5 class='title is-5'>${x.price} ${x.cuisine_name} 
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span></h5>
    <div class="image"><img src="${x.restaurant_id}.png"/></div>
    `;
    appendItem2.innerHTML = `<div class='columns'><div class='column'><span class='addy'><div class=addy2>Address</div>
    ${x.street_address}, ${x.city} ${x.state}, ${x.zip_code}</span>
    <hr>
    <span class='addy'><div class=addy2><p>Phone Number</p></div>
    ${x.phone_number}</span>
    <hr>
    <span class='addy'><div class=addy2>Hours</div>
    ${x.open_time} - ${x.close_time}</span></div>
    </div>`;};
        if (x.rating > 1 && x.rating <= 2) {
          appendItem.innerHTML = `<h3 class="title is-3">${x.restaurant_name}</h3>
    <h5 class='title is-5'>${x.price} ${x.cuisine_name} 
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span></h5>
    <div class="image"><img src="${x.restaurant_id}.png"/></div>
    `;
    appendItem2.innerHTML = `<div class='columns'><div class='column'><span class='addy'><div class=addy2>Address</div>
    ${x.street_address}, ${x.city} ${x.state}, ${x.zip_code}</span>
    <hr>
    <span class='addy'><div class=addy2><p>Phone Number</p></div>
    ${x.phone_number}</span>
    <hr>
    <span class='addy'><div class=addy2>Hours</div>
    ${x.open_time} - ${x.close_time}</span></div>
    </div>`;};
          if (x.rating > 0 && x.rating <= 1) {
            appendItem.innerHTML = `<h3 class="title is-3">${x.restaurant_name}</h3>
    <h5 class='title is-5'>${x.price} ${x.cuisine_name} 
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span>
    <span class="fa fa-star "></span></h5>
    <div class="image"><img src="${x.restaurant_id}.png"/></div>
    `;
    appendItem2.innerHTML = `<div class='columns'><div class='column'><span class='addy'><div class=addy2>Address</div>
    ${x.street_address}, ${x.city} ${x.state}, ${x.zip_code}</span>
    <hr>
    <span class='addy'><div class=addy2><p>Phone Number</p></div>
    ${x.phone_number}</span>
    <hr>
    <span class='addy'><div class=addy2>Hours</div>
    ${x.open_time} - ${x.close_time}</span></div>
    </div>`;};
    targetList1.append(appendItem);
    targetList2.append(appendItem2);
    console.log(x.restaurant_id)
    const coords = [];
    const lat = x.latitude;
    const long = x.longitude;
    coords.push(lat, long);
    console.log(coords);
    const marker = L.marker([lat, long]).addTo(mapObjectFromFunction);
    mapObjectFromFunction.panTo([lat, long]);
  }
  
  async function windowActions() {
    const map = mapInit();
    await dataHandler(map);
  }
  window.onload = windowActions;