const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const values = Object.values(animal);
  const findAnimal = species.find((specie) => specie.name === values[0]).residents;
  if (values.length === 1) {
    return findAnimal.length;
  }
  return findAnimal.filter((animals) => animals.sex === values[1]).length;
}

module.exports = countAnimals;
