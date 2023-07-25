const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];


//***MAP***
//1. Get array of all names
const allNames = characters.map((character)=>{
  return character.name;
}); 

//2. Get array of all heights
const allHeights = characters.map((character)=>character.height);

//3. Get array of objects with just name and height properties
const namesHeights = characters.map((character)=> ({
  name: character.name,
  height: character.height,
}));

//4. Get array of all first names
const allFirstNames = allNames.map((fullName) => {
  const pattern = /^[A-Za-z]+/;
  const firstName = fullName.match(pattern);
  return firstName;
});

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((total, character) => total + parseInt(character.mass),0);

//2. Get total height of all characters
const totalHeight = characters.reduce((total, character) => total + parseInt(character.height),0);

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((total, character) => {
  const color = character.eye_color;
  total[color] = (total[color] ?? 0) + 1;
  return total;
}, {});

//4. Get total number of characters in all the character names
const totalNamesCharacters = characters.reduce((total, character) => total + character.name.length,0);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreatherThan100 = characters.filter((character) => character.mass>= 100);

//2. Get characters with height less than 200

const heightLessThan200 = characters.filter((character)=> character.height < 200); 
//3. Get all male characters

const males = characters.filter((character)=> character.gender ==='male');
//4. Get all female characters

const felames = characters.filter((character)=> character.gender ==='female');
//***SORT***
//1. Sort by mass
const sortedByMass = characters.sort((a,b)=> a.mass > b.mass ? 1: -1);

//2. Sort by height
const sortedByHeight = characters.sort((a,b)=> (a.height < b.height) ? 1 : -1);

//3. Sort by name
const sortedByName = characters.sort((a,b) => (a.name > b.name)? 1 : -1);

//4. Sort by gender
const sortedByGender = characters.sort((a,b)=> a.gender< b.gender? 1 : -1);


//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every((character)=> character.eye_color =='blue');

//2. Does every character have mass more than 40?
const massMoreThan40 = characters.every((character)=> character.mass > 40);

//3. Is every character shorter than 200?
const shortedThan200 = characters.every((character)=> character.height < 200);

//4. Is every character male?
const isEveryoneMale = characters.every((character) => character.gender === 'male'); 

//***SOME***
//1. Is there at least one male character?
const isThereOneMale = characters.some((character)=> character.gender === 'male')

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some((character) => character.eye_color ==='blue ')

//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character)=> character.height > 210)

//4. Is there at least one character that has mass less than 50?
const massLessThan50 = characters.some((character) => character.mass>50)










