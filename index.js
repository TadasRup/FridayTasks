console.clear();
console.log('==== 1 task ====');

let a = 12345;
let b = 12344;

let result = a > b ? "a bigger than b" : a < b ? "b bigger than a" : "a and b is same";
console.log(result);

console.log('==== 2 task ====');

for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('==== 3 task ====');

for (var i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  
console.log('==== task 4 ====');

for (var i = 0; i < 5; i++) {
    var randomFiveNumbers = Math.floor(Math.random() * 10) + 1;
    console.log(randomFiveNumbers);
  }

console.log('==== 5 task ====');

var sum = 0;
while (sum !== 5) {
    sum = Math.floor(Math.random() * 10) + 1;
    console.log(sum);
}

console.log('==== 6 task ====');

let array = [];
const arraylength = Math.floor(Math.random() * (30 - 20 + 1) + 20);

for (let i = 0; i < arraylength; i++) {
  array.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}
console.log(array);
console.log('BiggestArray: ', arraylength);


console.log('==== 7 task ====');

const randomArray = ['A', 'A', 'A', 'D', 'A', 'B', 'C', 'A', 'D', 'B', 'B', 'B']; // nesupratau, 100 ilgis, surasyt paciam 100 raidziu ar, kad sugeneruotu random 100 A,B,C,D raidziu. Palieku, kiek parasiau.

function lettersAmount(array) {
    return array.reduce((counter, letter) => {
      counter[letter] = (counter[letter] || 0) + 1;
      return counter;
    }, {});
  }
  
  const answer = lettersAmount(randomArray);
  console.log(answer);
  

console.log('==== 8 task ====');

//function equalSum ();

console.log('==== 9 task ====');

console.log('==== 10 task ====');

function phoneNumber(array) {
  const number = array.join('');
  const formattedNumber = `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`;
  return formattedNumber;
}
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedNumber = phoneNumber(numberArray);
console.log(formattedNumber);




/*
────────────────────────────────────────
────────────────────────────────────────
───────────████──███────────────────────
──────────█████─████────────────────────
────────███───███───████──███───────────
────────███───███───██████████──────────
────────███─────███───████──██──────────
─────────████───████───███──██──────────
──────────███─────██────██──██──────────
──────██████████────██──██──██──────────
─────████████████───██──██──██──────────
────███────────███──██──██──██──────────
────███─████───███──██──██──██──────────
───████─█████───██──██──██──██──────────
───██████───██──────██──────██──────────
─████████───██──────██─────███──────────
─██────██───██─────────────███──────────
─██─────███─██─────────────███──────────
─████───██████─────────────███──────────
───██───█████──────────────███──────────
────███──███───────────────███──────────
────███────────────────────███──────────
────███───────────────────███───────────
─────████────────────────███────────────
──────███────────────────███────────────
────────███─────────────███─────────────
────────████────────────██──────────────
──────────███───────────██──────────────
──────────████████████████──────────────
──────────████████████████──────────────
────────────────────────────────────────
────────────────────────────────────────
*/