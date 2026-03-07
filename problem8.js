// ------- Max height ----------


const height = [50, 60, 70, 80 ,200];

function maxHeight(numbers) {
       let max1 = numbers[0];
    for(const num of numbers) {
        
        if( num > max1) {
            max1 = num;
        }
        
    }
    return max1;

}

const max = maxHeight(height);

console.log("Max height is : " , max);