const people = [
  {
    first: "Randy",
    last: "James",
    age: 77,
  },
  {
    first: "Tyson",
    last: "Potter",
    age: 32,
  },
  {
    first: "Gus",
    last: "Smith",
    age: 32,
  },
];

//Map is usful for changing the shape of your data
//first
const firstNamesArray = people.map((person) => {
  return person.first;
});

console.log(firstNamesArray);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

firstNamesArrayReverse = firstNamesArray.reverse(); // reverse the firstanmes array
console.log(firstNamesArrayReverse);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const firstAndLastArray = people.map((person) => {
  return {
    firstName: person.first,
    lastname: person.last,
  };
});
console.log(firstAndLastArray);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
