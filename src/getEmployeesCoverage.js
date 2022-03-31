const data = require('../data/zoo_data');

const { species, employees } = data;

const getSpecies = (array, type) => {
  const findAnimal = array.map((element) => species.find((specie) => element === specie.id));
  return findAnimal.map((animal) => animal[type]);
};

const objectEmployees = (array) => {
  const newObject = array.reduce((acc, employee) => {
    acc.id = employee.id;
    acc.fullName = `${employee.firstName} ${employee.lastName}`;
    acc.species = getSpecies(employee.responsibleFor, 'name');
    acc.locations = getSpecies(employee.responsibleFor, 'location');
    return acc;
  }, {});
  return newObject;
};

const testName = (targetInfo) => {
  const n = targetInfo.name;
  if (!employees.some((person) => person.firstName === n || person.lastName === n)) {
    throw new Error('Informações inválidas');
  }
  const employee = employees.filter((person) => person.firstName === n || person.lastName === n);
  return objectEmployees(employee);
};

const testID = (targetInfo) => {
  if (!employees.some((person) => person.id === targetInfo.id)) {
    throw new Error('Informações inválidas');
  }
  const employee = employees.filter((person) => person.id === targetInfo.id);
  return objectEmployees(employee);
};

function getEmployeesCoverage(targetInfo) {
  const fullCoverage = [];
  if (!targetInfo) {
    employees.forEach((element) => fullCoverage.push(objectEmployees([element])));
    return fullCoverage;
  }
  if (targetInfo.name) {
    return testName(targetInfo);
  }
  if (targetInfo.id) {
    return testID(targetInfo);
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
