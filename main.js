//TODO add imports if needed
//TODO doc
const muzskePriezvisko = [
  "Novak",
  "Horváth",
  "Petrov",
  "Kowalski",
  "Müller",
  "Silva",
  "Dimitrov",
  "Fischer",
  "Ivanov",
  "Kovac"
];

const zenskePriezvisko = [
  "Nováková",
  "Horváthová",
  "Petrova",
  "Kowalska",
  "Müllerová",
  "Silvová",
  "Dimitrova",
  "Fischerová",
  "Ivanova",
  "Kovačová"
];

const muzskeMeno = [
  "Adrian",
  "Lucas",
  "Daniel",
  "Viktor",
  "Sebastian",
  "Adam",
  "Martin",
  "Oliver",
  "Rafael",
  "Marek"
];

const zenskeMeno = [
  "Emilia",
  "Sofia",
  "Lucia",
  "Natalia",
  "Bianca",
  "Diana",
  "Eliza",
  "Klara",
  "Lara",
  "Maya"
];


function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function nahodneMeno() {
  const zena = Math.random() < 0.5;

  const krstneMeno = zena ? zenskeMeno : muzskeMeno;
  const priezvisko = zena ? zenskePriezvisko : muzskePriezvisko;

  const vyberMeno = randomItem(krstneMeno);
  const vyberPriezvisko = randomItem(priezvisko);


  const meno = vyberMeno
  const prijmeni = vyberPriezvisko
  const gender = zena ? "female" : "male";

  return {
    meno: vyberMeno,
    prijmeni: vyberPriezvisko,
    gender: gender
  };
}



function nahodneZatazenie(){
  const uvazok = ["10", "20", "30", "40"];

  const hodiny = randomItem(uvazok);

  const workLoad = hodiny;
  return workLoad;
}

const osoba = nahodneMeno();

console.log(
  `name: ${osoba.meno}, surname: ${osoba.prijmeni}, gender: ${osoba.gender}, workload: ${nahodneZatazenie()}`
);

//**
// * The main function which calls the application. 
// * Please, add specific description here for the application purpose.
// * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
// * @returns {Array} of employees
// */
// export function main(dtoIn) {
  //TODO code
  //let dtoOut = exMain(dtoIn);
  return dtoOut;
}

