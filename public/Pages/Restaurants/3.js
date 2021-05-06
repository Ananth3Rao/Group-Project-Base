async function dataHandler() {
    const request = await fetch('/api/restaurant');
    const d = await request.json();
    const dat = d.data;
    const request2 = await fetch('/api/restaurant');
    const d2 = await request2.json();
    const dat2 = d2.data;
    const targetList1 = document.querySelector('.target-list');
  
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
    console.log(up);
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
          rating: question.rating
  
        });
      }
    }
    const appendItem = document.createElement('div');
    appendItem.classList.add = 'container';
    appendItem.innerHTML = `<div class="box"><h3 class="title is-3">${result[2].restaurant_name}</h3><div class="image"><img src="${result[2].restaurant_id}.png"/></div></div>`;
    targetList1.append(appendItem);
    console.log(result[2].restaurant_id)
  
  }
  
  dataHandler();