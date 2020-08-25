const students = [
  "Jared", //0 index
  "Alexus", //1index
  "alfredo", //2 index
  "Austin", //3 index
  "sierra", //4 index
  "Tayolor", //5 index
  "Lolz", //6 index
  "AwsomeGuy", //7 index
  "Jared",
];
// sort() default behavior is Aphebetic A-Z

console.log("Unsorted Students " + students); // Arayy before sort()

const sortedStudents = students.sort();
students.sort(function (studentA, studentB) {
  let a = studentA.toLowerCase();
  let b = studentB.toLowerCase();
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
});
console.log("sorted Students " + students); // Arayy After sort()
