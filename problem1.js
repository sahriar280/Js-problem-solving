//---------- Height calculator--------------
// function inchToFeet(inch){

//     const feet = inch / 12;
//     return feet;

// }

// const siyaHeight = inchToFeet(75);
// console.log(siyaHeight);

//------------------------------------

function inchFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " fit " + inchRemaining + " inch ";
  return result;
}

const siyamHeight = inchFeet2(75);

console.log(siyamHeight);
