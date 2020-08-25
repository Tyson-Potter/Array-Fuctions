const students = [
  "Jared", //0 index
  "Alexus", //1index
  "alfredo", //2 index
  "Austin", //3 index
  "sierra", //4 index
  "Tayolor", //5 index
  "Lolz", //6 index
  "AwsomeGuy", //7 index
];

const sutdentsWithTheLetterA = students.filter((student) => {
  const lowerCaseStudent = student.toLowerCase();
  if (lowerCaseStudent.includes("a")) {
    return true;
  } else {
    return false;
  }
});

console.log(sutdentsWithTheLetterA);
