const data = require('../data/zoo_data');

const employeesArray = data.employees;

function isManager(id) {
  return employeesArray.some((element) => element.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filtered = employeesArray.filter((element) => element.managers.includes(managerId));
  return filtered.map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
