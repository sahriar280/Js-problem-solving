

const city = ['dhaka', 'tangail','rajsahi','dinajpur','tangail', 'dhaka','dinajpur'];

function noDuplicate(arr) {
    const uniqueArr = [];
    for(const item of arr) {

      if(uniqueArr.includes(item) === false ) {
           uniqueArr.push(item);
      }
    }
    return uniqueArr;

}

const unique = noDuplicate(city);
console.log(unique);