const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id);
  const animal = species.find((specie) => specie.id === employee.responsibleFor[0]);
  const older = animal.residents.reduce((old, next) => (old.age > next.age ? old : next));
  return Object.values(older);
}

module.exports = getOldestFromFirstSpecies;
