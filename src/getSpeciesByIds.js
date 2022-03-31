const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return ids;
  }
  // Percorrer o array species e encontrar os ids
  const speciesArray = data.species;
  return ids.map((element) => speciesArray.find((specie) => element === specie.id));
}

module.exports = getSpeciesByIds;
