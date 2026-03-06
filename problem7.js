const jim = 200;
const tim = 100;
const kim = 90;

function ultimateBoss(num1, num2, num3) {
  if (jim > tim && jim > kim) {
    console.log("Jim is the boss ");
  } else if (tim > kim && tim > jim) {
    console.log("Tim is the mastermind");
  } else {
    console.log("kim is the Boss !!!!");
  }
}

const Boss = ultimateBoss(jim, tim, kim);
