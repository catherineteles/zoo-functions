const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const speciesArray = data.species;
  const findAnimal = speciesArray.find((specie) => specie.name === animal).residents;
  return findAnimal.every((localAnimal) => localAnimal.age >= age);
}

module.exports = getAnimalsOlderThan;
