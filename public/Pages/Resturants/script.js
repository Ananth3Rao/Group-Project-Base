const endpoint = '/api/restaurant';
const restaurants = [];

console.log(endpoint)
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => restaurants.push(...data));
console.log(restaurants);

function findMatches(wordToMatch, restaurants) {
  return restaurants.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.cuisine_type.match(regex);
  });
}
function displayMatches() {
  const matchArray = findMatches(this.value, restaurants);
  const html = matchArray.map((place) => {
    const regex = new RegExp(this.value, 'gi');
    const categoryName = place.cuisine_type.replace(regex,
      `<span class='h1'>${this.value}</span>`);
    return `
                <li>
                    <span class="name">${place.restaurant_id}</span>
                </li>
                `;
  }).join('');
  suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.form-control');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);