const students = [
  "Jared", //0 index
  "Alexus", //1index
  "alfredo", //2 index
  "Austin", //3 index
  "sierra", //4 index
  "Tayolor", //5 index
  "Lolz", //6 index
  "AwsomeGuy", //7 index
  "Trevor", //8 index
];

const studentFound = students.find((student) => {
  if (student === "Trevor") {
    return true;
  }
});

console.log(studentFound);
