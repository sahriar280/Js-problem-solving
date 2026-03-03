//-----Task : Odd-Average---------

function oddaverage(numbers) {
       const odd = [];
    for(const number of numbers) {
        if( number%2 !==0) {
            odd.push(number);
            // console.log(number);
        }

    
    }
    // console.log(odd);
     let sum = 0;
    for(const number of odd) {
        // console.log(number);
        sum = sum + number;
    }
     const count = odd.length;    // sum = 137 and odd element 7;
     console.log(sum,count);
     const avg = sum / count;
     return Number(avg.toFixed(2));  // Number type return korbe....Number use na korle.. String hisebe return hobe....;

}

const numbers = [7, 15, 16, 17, 19, 21, 27, 31, 40];

const avg = oddaverage(numbers);

console.log('avaerage of odd numbers is : ', avg);

