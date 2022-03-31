const data = require('../data/zoo_data');

const { species, hours } = data;

const createObject = (day) => {
  const dayObject = { officeHour: '', exhibition: '' };
  const animalsFilter = species.filter((animal) => animal.availability.includes(day[0]));
  dayObject.officeHour = `Open from ${day[1].open}am until ${day[1].close}pm`;
  dayObject.exhibition = animalsFilter.map((animal) => animal.name);
  if (day[1].open === 0) {
    dayObject.officeHour = 'CLOSED';
    dayObject.exhibition = 'The zoo will be closed!';
  }
  return dayObject;
};

const getFullSchedule = () => {
  const fullSchedule = Object.entries(hours).reduce((acc, day) => {
    acc[day[0]] = createObject(day);
    return acc;
  }, {});
  return fullSchedule;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return getFullSchedule();
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    const myArray = Object.entries(hours).find((day) => day.includes(scheduleTarget));
    const objectDay = {};
    objectDay[scheduleTarget] = createObject(myArray);
    return objectDay;
  }
  if (species.some((specie) => specie.name === scheduleTarget)) {
    const animalFind = species.find((specie) => specie.name === scheduleTarget);
    return animalFind.availability;
  }
  return getFullSchedule();
}

console.log(getSchedule('Monday'));
module.exports = getSchedule;
