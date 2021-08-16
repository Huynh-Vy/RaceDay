let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false;
let age = 19;

if (age > 18 && registerEarly === true) {
  raceNumber += 100;
  console.log(`The race will begin at 9:30am with the Race Number : ${raceNumber}`);
} else if (age > 18 && registerEarly === false) {
    console.log(`The race will begin at 11am with the Race Number : ${raceNumber}`);
} else if (age < 18) {
    console.log(`The race will begin at 12:30pm with the Race Number : ${raceNumber}`);
} else {
    console.log('Please see the registration desk');}