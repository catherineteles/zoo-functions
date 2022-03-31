const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let adult = 0;
  let child = 0;
  let senior = 0;
  if (Object.keys(entrants).length === 0) {
    return;
  }
  entrants.forEach((person) => {
    if (person.age < 18) {
      child += 1;
    } else if (person.age >= 50) {
      senior += 1;
    } else {
      adult += 1;
    }
  });
  return { adult, senior, child };
}

function calculateEntry(entrants) {
  let price = 0;
  if (!entrants) {
    return price;
  }
  if (Object.keys(entrants).length === 0) {
    return price;
  }
  const quantity = Object.values(countEntrants(entrants));
  const values = Object.values(data.prices);
  quantity.forEach((element, index) => {
    price += element * parseFloat(values[index]);
  });
  return price;
}

module.exports = { calculateEntry, countEntrants };
