let listOfStudents = [
  { name: "João", firstNote: 7.5, secondNote: 8.0 },
  { name: "Maria", firstNote: 6.0, secondNote: 7.5 },
  { name: "Pedro", firstNote: 8.0, secondNote: 9.0 },
];

function calculateAverage(firstNote, secondNote) {
  return (firstNote + secondNote) / 2;
}

function checkNote(student) {
  let average = calculateAverage(student.firstNote, student.secondNote);
  if (average >= 7) {
    return `A média do aluno(a) ${student.name} é: ${average.toFixed(2)} 
    \n Parabéns ${student.name}, você foi aprovado(a)!`;
  } else {
    return `A média do aluno(a) ${student.name} é: ${average.toFixed(2)}
     \n Não foi dessa vez, ${student.name}! Tente novamente!`;
  }
}
function message() {
  for (let i = 0; i < listOfStudents.length; i++) {
    alert(checkNote(listOfStudents[i]));
  }
}

message();
