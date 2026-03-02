// ------- Finding leap Year----------

function isLeapYear(year) {

    if (year % 100 !== 0 && year % 4 === 0) {      // first logic
        return true;
    }
     else if (year % 100 === 0 && year % 400 === 0) {  // second logic
        return true;
     }

    else {

        return false;
    }
}

const leapYear = isLeapYear(2028);
console.log(leapYear);
