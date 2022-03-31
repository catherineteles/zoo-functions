const data = require('../data/zoo_data');

const { species } = data;

const getResidents = (sorted) => {
  const locationResidents = species.reduce((acc, specie) => {
    const animalObject = {};
    const arrayAnimais = specie.residents.map((resident) => resident.name);
    if (sorted === 'sorted') {
      animalObject[specie.name] = arrayAnimais.sort();
    } else {
      animalObject[specie.name] = arrayAnimais;
    }
    if (!acc[specie.location]) {
      acc[specie.location] = [];
    }
    acc[specie.location].push(animalObject);
    return acc;
  }, {});
  return locationResidents;
};

const getResidentsByGender = (gender, sorted) => {
  const locationResidents = species.reduce((acc, specie) => {
    const animalObject = {};
    const arrayGender = specie.residents.filter((resident) => resident.sex === gender);
    const arrayAnimais = arrayGender.map((resident) => resident.name);
    if (sorted === 'sorted') {
      animalObject[specie.name] = arrayAnimais.sort();
    } else {
      animalObject[specie.name] = arrayAnimais;
    }
    if (!acc[specie.location]) {
      acc[specie.location] = [];
    }
    acc[specie.location].push(animalObject);
    return acc;
  }, {});
  return locationResidents;
};

const getLocation = () => {
  const locationOnly = species.reduce((acc, specie) => {
    if (!acc[specie.location]) {
      acc[specie.location] = [specie.name];
    } else {
      acc[specie.location].push(specie.name);
    }
    return acc;
  }, {});
  return locationOnly;
};

const withOptions = (options) => {
  const { includeNames, sex, sorted } = options;
  if (!includeNames) {
    return getLocation();
  }
  if (sorted === true) {
    if (sex) {
      return getResidentsByGender(sex, 'sorted');
    }
    return getResidents('sorted');
  }
  if (sex) {
    return getResidentsByGender(sex, 'notsorted');
  }
  return getResidents('notsorted');
};

function getAnimalMap(options) {
  if (!options) {
    return getLocation();
  }
  return withOptions(options);
}

console.log(getAnimalMap({ includeNames: true, sorted: true, sex: 'female' }));
module.exports = getAnimalMap;
